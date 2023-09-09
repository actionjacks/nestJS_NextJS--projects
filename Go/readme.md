# run go file

`go run <filename.go>`

# run multiple files

`go run <filename.go> <filename.go>`
`go run *.go`

# !!!
`x := 42
p := &x // p zawiera adres zmiennej x`
`x := 42
p := &x
fmt.Println(*p) // *p zwraca wartość 42 (odnosi się do wartości, do której prowadzi wskaźnik p)
`
