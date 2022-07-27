import { User } from "../../entities/User";
import { IEmailProvider } from "../../providers/IEmailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";


export class CreateUserCase{
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IEmailProvider
    ){}
        
    async execute(data: ICreateUserRequestDTO){ 
       const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

       if(userAlreadyExists){
        throw new Error ("User already exists");
       }

       const user = new User(data);

       await this.usersRepository.save(user);

       await this.mailProvider.sendEmail({
        to: {
            name: data.name,
            email: data.email
        },
        from : {
            name: "testing email sending functionality",
            email: "testing@gmaiil.com"
        },
        subject: "Subject email",
        body: "<p>Funcionality body in email sending</p>"

        
       })
    }
} 

