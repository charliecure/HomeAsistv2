using Microsoft.AspNetCore.Mvc;

namespace HomeAssist.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SecurityController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetSecurity()
        {
            return Ok("Security endpoint");
        }
    }
}