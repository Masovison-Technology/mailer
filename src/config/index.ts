import { createTransport } from 'nodemailer';
import SMTPConnection from 'nodemailer/lib/smtp-connection';

export const transporter = createTransport(new SMTPConnection({
    host: process.env.MAIL__HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL__MAIL,
        pass: process.env.MAIL__PASSWORD,
    },
}));

