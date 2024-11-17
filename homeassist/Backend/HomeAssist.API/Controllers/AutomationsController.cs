using Microsoft.AspNetCore.Mvc;

namespace HomeAssist.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AutomationsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAutomations()
        {
            return Ok("Automations endpoint");
        }
    }
}