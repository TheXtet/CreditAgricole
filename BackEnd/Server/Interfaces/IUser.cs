using Grains.DTO;
using Orleans;
using System.Threading.Tasks;

namespace Interfaces
{
    /// <summary>
    /// Orleans grain communication interface
    /// </summary>
    public interface IUser : IGrainWithStringKey
    {
        Task<string> GetLogin();

        Task<bool> CheckPassword(string password);

        Task<bool> SetPassword(string newPassword, string oldPassword);

        Task<string> GetName();

        Task SetName(string name);

        Task<string> GetSurName();

        Task SetSurName(string surname);

        Task<string> GetPosition();

        Task SetPosition(string position);

        /// <summary>
        /// Returnes current profile picture for current user
        /// </summary>
        /// <returns>Byte array</returns>
        Task<byte[]> GetProfileImage();

        Task SetProfileImage(byte[] data);

        Task<bool> IsAdmin();

        Task<double> GetSalary();

        Task SetSalary(double salary);

        Task<UserState> GetState(); 
    }
}