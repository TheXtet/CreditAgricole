using Interfaces;
using Interfaces.Models;
using Microsoft.AspNetCore.Mvc;
using Orleans;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CriteriasController : ControllerBase
    {
        private readonly IGrainFactory _client;
        private readonly ICriteria _grain;

        public CriteriasController(IGrainFactory client)
        {
            _client = client;
            _grain = _client.GetGrain<ICriteria>(0);
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public Task<IEnumerable<Сriteria>> Get() => _grain.Get();

        // POST api/criterias
        [HttpPost]
        public Task Post([FromBody] Сriteria сriteria) => _grain.Add(сriteria.Name, сriteria.Abbreviation);

        // DELETE api/users/username
        [HttpDelete("{abbreviation}")]
        public Task Delete(string abbreviation) => _grain.Disable(abbreviation);
    }
}