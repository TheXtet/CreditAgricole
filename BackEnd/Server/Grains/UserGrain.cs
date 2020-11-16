using Interfaces.Repository;
using Interfaces;
using Orleans;
using System.Threading.Tasks;
using Grains.DTO;
using AutoMapper;

namespace Grains
{
    public class UserGrain : Grain<UserArchiveState>, IUser
    {
        public Task<bool> CheckPassword(string password) => Task.FromResult(this.State.Password == password);

        public Task<string> GetLogin() => Task.FromResult(this.GetPrimaryKeyString());

        public Task<string> GetName() => Task.FromResult(this.State.Name);

        public Task<string> GetPosition() => Task.FromResult(this.State.Position);

        public Task<byte[]> GetProfileImage() => Task.FromResult(this.State.ProfileImage);

        public Task<double> GetSalary() => Task.FromResult(this.State.Salary);

        public Task<UserState> GetState() => Task.FromResult(new Mapper(new MapperConfiguration(configuration => configuration.CreateMap<UserArchiveState, UserState>())).Map<UserState>(this.State));

        public Task<string> GetSurName() => Task.FromResult(this.State.SurName);

        public Task<bool> IsAdmin() => Task.FromResult(this.State.Position == "Manager");

        public async Task SetName(string name)
        {
            this.State.Name = name;
            await this.WriteStateAsync();
        }

        public async Task<bool> SetPassword(string newPassword, string oldPassword)
        {
            if (this.State.Password == oldPassword)
            {
                this.State.Password = newPassword;
                await WriteStateAsync();
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task SetPosition(string position)
        {
            this.State.Position = position;
            await this.WriteStateAsync();
        }

        public async Task SetProfileImage(byte[] data)
        {
            this.State.ProfileImage = data;
            await this.WriteStateAsync();
        }

        public async Task SetSalary(double salary)
        {
            this.State.Salary = salary;
            await this.WriteStateAsync();
        }

        public async Task SetSurName(string surname)
        {
            this.State.SurName = surname;
            await this.WriteStateAsync();
        }
    }

    public class UserArchiveState : IUserState
    {
        public string Password { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public byte[] ProfileImage { get; set; }
        public double Salary { get; set; }
        public string SurName { get; set; }
    }
}