using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace MinimalAuthApi
{
    public class Database
    {
        private static string UserHash(string username) => Convert.ToBase64String(MD5.HashData(Encoding.UTF8.GetBytes(username)));

        public async Task<User> GetUserAsync(string username)
        {
            var hash = UserHash(username);
            if (!File.Exists(hash))
            {
                return null;
            }
            await using var reader = File.OpenRead(hash);
            return await JsonSerializer.DeserializeAsync<User>(reader);
        }

        public async Task PutAsync(User user)
        {
            var hash = UserHash(user.Username);
            var directoryPath = Path.GetDirectoryName(hash);
            Directory.CreateDirectory(directoryPath); // Utwórz katalog, jeśli nie istnieje

            await using var fileStream = File.Create(hash);
            await JsonSerializer.SerializeAsync(fileStream, user);
        }
    }
}

public class User
{
    public string Username { get; set; }
    public string PasswordHash { get; set; }
    public List<UserClaim> Claims { get; set; } = new();
}

public class UserClaim
{
    public string Type { get; set; }
    public string Value { get; set; }
}