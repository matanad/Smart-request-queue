using backend.Models;

namespace backend.Repositories
{
    public interface IRequestsRepository
    {
        List<Request> getRequests(int maxItems);
    }
}