package main

import "fmt"

type Speaker interface {
	Speak() string
}

type EnglishSpeaker struct{}

func (e EnglishSpeaker) Speak() string {
	return "Hello!"
}

type SpanishSpeaker struct{}

func (s SpanishSpeaker) Speak() string {
	return "¡Hola!"
}

func Greet(s Speaker) {
	fmt.Println(s.Speak())
}

func main() {
	eng := EnglishSpeaker{}
	spa := SpanishSpeaker{}

	Greet(eng) // Output: Hello!
	Greet(spa) // Output: ¡Hola!
}

// --------------------------------------INJECT ---------------------------------------------------------------------

type Notifier interface {
	Notify(message string) error
}

type EmailNotifier struct {
	Email string
}

func (e EmailNotifier) Notify(message string) error {
	fmt.Printf("Sending email to %s: %s\n", e.Email, message)
	return nil
}

type SMSNotifier struct {
	PhoneNumber string
}

func (s SMSNotifier) Notify(message string) error {
	fmt.Printf("Sending SMS to %s: %s\n", s.PhoneNumber, message)
	return nil
}

type NotificationService struct {
	Notifier Notifier
}

func (n NotificationService) SendNotification(message string) {
	err := n.Notifier.Notify(message)
	if err != nil {
		fmt.Println("Error sending notification:", err)
	}
}

func main_() {
	emailNotifier := EmailNotifier{Email: "example@example.com"}
	smsNotifier := SMSNotifier{PhoneNumber: "123-456-789"}

	emailService := NotificationService{Notifier: emailNotifier}
	smsService := NotificationService{Notifier: smsNotifier}

	emailService.SendNotification("Hello via Email!") // Output: Sending email to example@example.com: Hello via Email!
	smsService.SendNotification("Hello via SMS!")     // Output: Sending SMS to 123-456-789: Hello via SMS!
}
