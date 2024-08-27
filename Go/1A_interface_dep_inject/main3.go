package main

import (
	"context"
	"database/sql"
)

type User struct {
	ID string
}

type UserRepo interface {
	GetByID(ctx context.Context, userID string) (*User, error)
	Add(ctx context.Context, user User) error
}

type PostgresUserRepo struct {
	db *sql.DB
}

func NewPostgresUserRepo(db *sql.DB) *PostgresUserRepo {
	return &PostgresUserRepo{db: db}
}

func (pr *PostgresUserRepo) GetByID(ctx context.Context, userID string) (*User, error) {
	return nil, nil
}

func (pr *PostgresUserRepo) Add(ctx context.Context, user User) error {
	return nil
}

type UserService struct {
	userRepo UserRepo
}

func NewUserService(userRepo UserRepo) *UserService {
	return &UserService{userRepo: userRepo}
}

func main3() {
	postgresUserRepo := NewPostgresUserRepo(&sql.DB{})
	userService := NewUserService(postgresUserRepo)

	userService.userRepo.Add(context.Background(), User{ID: "1"})
}
