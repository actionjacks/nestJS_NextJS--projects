using AutoMapper;
using Microsoft.EntityFrameworkCore;
using nyapi.Data;
using nyapi.Dtos.Character;
using nyapi.Models;

namespace nyapi.Services.CharacterService
{
    public class CharacterService : ICharacterService
    {
        private static List<Character> characters = new List<Character>
        {
            new Character(),
            new Character { Id = 1, Name = "Fandanko" }
        };
        private readonly IMapper _mapper;
        private readonly DataContext _context; // SQL DATABASE
        // CONSTRUCTOR
        public CharacterService(IMapper mapper, DataContext context)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ServiceResponse<List<GetCharacterDto>>> AddCharacter(AddCharacterDto newCharacter)
        {
            var serviceResponse = new ServiceResponse<List<GetCharacterDto>>();
            var character = _mapper.Map<Character>(newCharacter);
            character.Id = characters.Max(x => x.Id) + 1;

            characters.Add(character);
            serviceResponse.Data = characters.Select(c => _mapper.Map<GetCharacterDto>(c)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetCharacterDto>>> DeleteCharacter(int id)
        {
            var serviceResponse = new ServiceResponse<List<GetCharacterDto>>();
            try
            {
                var character = characters.First(c => c.Id == id);
                if (character is null)
                {
                    throw new Exception($"Character with Id '{id}' not found");
                }
                characters.Remove(character);

                serviceResponse.Data = characters.Select(c => _mapper.Map<GetCharacterDto>(c)).ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetCharacterDto>>> GetAllCharacters()
        {
            var serviceResponse = new ServiceResponse<List<GetCharacterDto>>();

            // Get character using DB context from sql databse
            var dbCharacter = await _context.Characters.ToListAsync();
            serviceResponse.Data = dbCharacter.Select(c => _mapper.Map<GetCharacterDto>(c)).ToList(); ;
            return serviceResponse;

            // serviceResponse.Data = characters.Select(c => _mapper.Map<GetCharacterDto>(c)).ToList(); ;
            // return serviceResponse;
        }
        public async Task<ServiceResponse<GetCharacterDto>> GetCharacter(int id)
        {
            var serviceResponse = new ServiceResponse<GetCharacterDto>();

            // from static
            // var isCharacterFound = characters.FirstOrDefault(ch => ch.Id == id);

            // From DB
            var dbCharacter = _context.Characters.FirstOrDefaultAsync(ch => ch.Id == id);
            if (dbCharacter == null)
            {
                serviceResponse.Message = "user not found";
                serviceResponse.Success = false;
            }
            serviceResponse.Data = _mapper.Map<GetCharacterDto>(dbCharacter);
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetCharacterDto>> UpdateCharacter(UpdateCharacterDto updateCharacter)
        {
            var serviceResponse = new ServiceResponse<GetCharacterDto>();
            try
            {
                var character = characters.FirstOrDefault(c => c.Id == updateCharacter.Id);
                if (character is null)
                {
                    throw new Exception($"Character with Id '{updateCharacter.Id}' not found");
                }
                _mapper.Map<Character>(updateCharacter);

                character.Name = updateCharacter.Name;
                character.HitPoints = updateCharacter.HitPoints;
                character.Strenght = updateCharacter.Strenght;
                character.Defense = updateCharacter.Defense;
                character.Intelligence = updateCharacter.Intelligence;
                character.Class = updateCharacter.Class;

                serviceResponse.Data = _mapper.Map<GetCharacterDto>(character);
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }
    }
}
