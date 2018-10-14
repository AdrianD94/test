using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
       
        [Required]
        [StringLength(10,MinimumLength=6,ErrorMessage="You most specfied password between 6 and 10 character")]
        public string  Password { get; set; }
    }
}