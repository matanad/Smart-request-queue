using backend.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestsController : ControllerBase
    {
        private readonly IRequestsRepository _requestsRepository;

        public RequestsController(IRequestsRepository requestsRepository) {
            _requestsRepository = requestsRepository;
        }
        [HttpGet]
        public IActionResult GetRequests(int maxItems)
        {
            var res = _requestsRepository.getRequests(maxItems);
            if(res == null)
                return NotFound();
            return Ok(res);
        }
    }
}
