using WebApplicationAPI.Models.Dto;

namespace WebApplicationAPI.Data
{
    public class VillaStore
    {
        public static List<VillaDTO> villaList = new List<VillaDTO>
            {
                new VillaDTO { Id=1, Name= "vila2", Occupancy=12, Sqft = "d" },
                new VillaDTO { Id=2, Name= "vila22", Occupancy=122, Sqft = "dd" }
            };
    }
}
