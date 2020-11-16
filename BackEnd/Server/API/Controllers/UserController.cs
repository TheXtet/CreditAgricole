using Grains;
using Grains.DTO;
using Interfaces;
using Microsoft.AspNetCore.Mvc;
using Orleans;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IGrainFactory _client;
        private IUser _grain;

        public UserController(IGrainFactory client)
        {
            _client = client;
            _grain = _client.GetGrain<IUser>("Default");
        }

        [HttpGet("{login}")]
        public async Task<ActionResult<UserState>> GetUser(string login)
        {
            _grain = _client.GetGrain<IUser>(login);
            return await _grain.GetState();
        }
    }
}