using Microsoft.AspNetCore.Identity.UI.Services;

namespace Blog.Utility
{
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            // logic to send Email
            return Task.CompletedTask;
        }
    }
}
