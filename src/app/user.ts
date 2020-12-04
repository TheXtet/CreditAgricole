export class User{
    login:string;
    name: string;
    surName: string;
    position: string;
    profileImage: string;
    isAdmin: boolean;
    sallary: number;
    criterias: [
      {
        name: string;
        abbreviation: string;
        isEnabled: boolean;
        score: number;
      }
    ]
  }