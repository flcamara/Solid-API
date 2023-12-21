import { IMailProvider, Imessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from 'nodemailer'

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail;
    
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: '',
            port: 2525,
            secure: false,
            auth: {
                user: '',
                pass: '',
            }
        })
    }
  
    async sendMail(message: Imessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
  };
}