start:
	@./bin/main.exe

build:
	@go build -o ./bin ./cmd/api/main.go


docker-start: 
	@docker compose up --build
	
docker-stop:
	@docker-compose rm -v --force --stop
	@docker rmi golang-jack