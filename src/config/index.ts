import { createTransport } from 'nodemailer';

export const transporter = createTransport({
    host: process.env.MAIL__HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL__MAIL,
        pass: process.env.MAIL__PASSWORD,
    },
});
