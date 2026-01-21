using backend.Models;

namespace backend.Repositories
{
    public class RequestsRepository : IRequestsRepository
    {
        private readonly List<Request> _requests;
        public RequestsRepository()
        {
            _requests = new()
            {
                new Request
                {
    Id = 1,
    CreatedAt = new DateTime(2026, 1, 21, 10, 0, 0, DateTimeKind.Utc),
    IsUrgent = true,
    Title = "Do Dishes"
},
new Request
{
    Id = 2,
    CreatedAt = new DateTime(2026, 1, 21, 11, 30, 0, DateTimeKind.Utc),
    IsUrgent = false,
    Title = "Do Homework"
},
new Request
{
    Id = 3,
    CreatedAt = new DateTime(2026, 1, 21, 14, 15, 0, DateTimeKind.Utc),
    IsUrgent = true,
    Title = "Do Something"
},
new Request
{
    Id = 4,
    CreatedAt = new DateTime(2026, 1, 21, 18, 45, 0, DateTimeKind.Utc),
    IsUrgent = false,
    Title = "Do Nothing"
}
            };
        }
        public List<Request> getRequests(int maxItems)
        {
            return _requests.OrderByDescending(r => r.IsUrgent).ThenBy(r => r.CreatedAt).Take(maxItems).ToList();
        }
    }
}
