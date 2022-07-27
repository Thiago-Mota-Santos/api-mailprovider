import { IEmailProvider, IMessage } from "../IEmailProvider";
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IEmailProvider{

    private transporter: Mail;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "9f758c4eb5ee77",
              pass: "41dd315b7f3a08"
            }
          })
    }

   async sendEmail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to:{
                name: message.to.name,
                address: message.to.email
            },
            from:{
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body

        })
    }
    
}

