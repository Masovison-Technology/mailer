import { createTransport } from 'nodemailer';

export const transporter = createTransport({
    host: process.env.MAIL__HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL__MAIL,
        pass: process.env.MAIL__PASSWORD,
    },
});
