using Microsoft.AspNetCore.Mvc;

namespace HomeAssist.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IntegrationsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetIntegrations()
        {
            return Ok("Integrations endpoint");
        }
    }
}