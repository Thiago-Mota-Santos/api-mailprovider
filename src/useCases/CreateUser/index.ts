import { MailTrapMailProvider } from "../../providers/implementions/MailTrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/implementions/PostgresUsersReporitory";
import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgressUsersRepository()

const createUserCase = new CreateUserCase(
    postgresUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserCase
)

export { createUserCase, createUserController }