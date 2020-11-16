using Interfaces.Repository;

namespace Grains.DTO
{
    public class UserState : IUserState
    {
        public string Name { get ; set; }
        public string Position { get; set; } 
        public byte[] ProfileImage { get; set; }
        public double Salary { get; set; }
        public string SurName { get; set; }
    }
}