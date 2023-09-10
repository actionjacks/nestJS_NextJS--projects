package main

import (
	"fmt"
	"io"
	"net/http"
	"time"

	"golang.org/x/net/websocket"
)

type Server struct {
	conns map[*websocket.Conn]bool
}

func NewServer() *Server {
	return &Server{
		conns: make(map[*websocket.Conn]bool),
	}
}

func (s *Server) handleWSOrderBook(ws *websocket.Conn) {
	fmt.Println("new incoming connection from client to order book", ws.RemoteAddr())

	for {
		payload := fmt.Sprintf("orderbook data %d\n", time.Now().UnixNano())
		ws.Write([]byte(payload))
		time.Sleep(time.Second * 2)
	}
}

func (s *Server) handleWS(ws *websocket.Conn) {
	fmt.Println("new incoming connection from clinent:", ws.RemoteAddr())

	s.conns[ws] = true
	s.readLoop(ws)
}

// readLoop, która jest odpowiedzialna za odbieranie wiadomości od klienta. Jeśli klient się rozłączy, ta metoda usuwa połączenie z mapy conns i kończy działanie
func (s *Server) readLoop_(ws *websocket.Conn) {
	for {
		var msg string
		err := websocket.Message.Receive(ws, &msg)
		if err != nil {
			delete(s.conns, ws)
			fmt.Println("client disconnected:", ws.RemoteAddr())
			return
		}

		fmt.Println("received message from client:", msg)
	}
}

func (s *Server) readLoop(ws *websocket.Conn) {
	buf := make([]byte, 1024)
	for {
		n, err := ws.Read(buf)
		if err != nil {
			if err == io.EOF {
				break
			}
			fmt.Println("read error")
			continue
		}
		msg := buf[:n]

		fmt.Println(string(msg))
		ws.Write([]byte("thx for message"))

		s.broadcast(msg)
	}
}

// send msg to connected socket
func (s *Server) broadcast(msg []byte) {
	for ws := range s.conns {
		go func(ws *websocket.Conn) { //  Rozpoczynamy nową goroutine w celu obsługi każdego połączenia osobno. Użycie go oznacza, że operacje zapisu do każdego połączenia będą wykonywane równolegle, co pozwala na równoczesne rozgłaszanie danych do wielu klientów bez blokowania głównego wątku serwera.
			if _, err := ws.Write(msg); err != nil {
				fmt.Println("write error", err)
			}
		}(ws)
	}
}

func main() {
	server := NewServer()

	http.Handle("/ws", websocket.Handler(server.handleWS))
	http.Handle("/orderbookfeed", websocket.Handler(server.handleWSOrderBook))

	http.ListenAndServe(":3000", nil)
}
