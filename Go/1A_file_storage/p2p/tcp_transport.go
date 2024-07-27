package p2p

import (
	"net"
	"sync"
)

type TCPTransport struct {
	listenerAddress string
	listener        net.Listener

	mu    sync.RWMutex
	peers map[net.Addr]Peer
}

func NewTCPTransport(listenerAddress string) *TCPTransport {
	return &TCPTransport{
		listenerAddress: listenerAddress,
	}
}
