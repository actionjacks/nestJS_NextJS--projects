using Microsoft.AspNetCore.Mvc;
using nyapi.Dtos.Character;
using nyapi.Models;

namespace nyapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly ICharacterService _characterService;
        //  private static Character knight = new Character();
        /* private static List<Character> characters = new List<Character>
        {
            new Character(),
            new Character { Id = 1, Name = "Fandanko" }
        };
        */
        public CharacterController(ICharacterService characterService)
        {
            _characterService = characterService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<GetCharacterDto>>>> Get()
        {
            return Ok(await _characterService.GetAllCharacters());
            // return BadRequest();
            // return NotFound();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetCharacterDto>>> SingleOne(int id)
        {
            return Ok(await _characterService.GetCharacter(id));
            // return BadRequest();
            // return NotFound();
        }
        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<GetCharacterDto>>>> AddCharacter(AddCharacterDto newCharacter)
        {
            // characters.Add(newCharacter);
            return Ok(await _characterService.AddCharacter(newCharacter));
        }
        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<GetCharacterDto>>>> UpdateCharacter(UpdateCharacterDto updateCharacter)
        {
            // characters.Add(newCharacter);
            var response = await _characterService.UpdateCharacter(updateCharacter);
            if (response.Data != null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<GetCharacterDto>>> DeleteCharacter(int id)
        {
            var response = await _characterService.DeleteCharacter(id);
            if (response.Data != null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
    }
}
