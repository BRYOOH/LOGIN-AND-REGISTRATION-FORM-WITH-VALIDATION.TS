using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SuperHeroAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class SuperHeroController:Controller{
        
        private static List<SuperHero>Heroes= new List<SuperHero>{
            new SuperHero{
                Id= 1,
                Name="Spider Man",
                FirstName="Peter",
                SecondName="Parker",
                Place="New York City"
            }
        };
        
        [HttpGet]
        public async await Task<ActionResult<List<SuperHero>>> Get()
        {
            
            return Ok(Heroes);
        }
        
    }    
}