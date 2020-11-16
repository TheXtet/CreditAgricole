namespace Interfaces.Repository
{
    public interface IUserState
    {
        string Name { get; set; }
        string Position { get; set; }
        byte[] ProfileImage { get; set; }
        double Salary { get; set; }
        string SurName { get; set; }
    }
}