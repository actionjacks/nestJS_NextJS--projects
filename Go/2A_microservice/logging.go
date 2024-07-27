package main

import (
	"context"
	"log"
	"time"
)

type LoggingService struct {
	next Service
}

func NewLoggingService(next Service) Service {
	return &LoggingService{
		next: next,
	}
}

func (l *LoggingService) GetCatFact(ctx context.Context) (fact *CatFact, err error) {
	defer func(start time.Time) {
		log.Printf("duration: %s", time.Since(start))
		log.Printf("fact: %s", fact)
		log.Printf("error: %s", err)
	}(time.Now())

	return l.next.GetCatFact(ctx)
}
