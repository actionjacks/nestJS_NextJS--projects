package handlers

import (
	"context"
	"jackapi/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

type EventsHandler struct {
	repository models.EventRepository
}

func (h *EventsHandler) GetMany(ctx *fiber.Ctx) error {
	context, cancel := context.WithTimeout(context.Background(), time.Duration(5*time.Second))
	defer cancel()

	events, err := h.repository.GetMany(context)

	if err != nil {
		return ctx.Status(fiber.StatusInternalServerError).JSON(&fiber.Map{
			"status":  "fail",
			"message": err.Error(),
		})
	}

	return ctx.Status(fiber.StatusOK).JSON(&fiber.Map{
		"status":  "success",
		"message": "",
		"data":    events,
	})
}

func (h *EventsHandler) GetOne(ctx *fiber.Ctx) error {
	// context, cancel := context.WithTimeout(context.Background(), time.Duration(5*time.Second))
	// defer cancel()
	return nil
}

func (h *EventsHandler) CreateOne(ctx *fiber.Ctx) error {
	// context, cancel := context.WithTimeout(context.Background(), time.Duration(5*time.Second))
	// defer cancel()
	return nil
}

func NewEventsHandler(router fiber.Router, repository models.EventRepository) {
	handler := &EventsHandler{
		repository: repository,
	}

	router.Get("/", handler.GetMany)
	router.Post("/", handler.CreateOne)
	router.Get("/:eventId", handler.GetOne)
}
