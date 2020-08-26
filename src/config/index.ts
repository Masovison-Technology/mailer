import { createTransport } from 'nodemailer';

export const transporter = createTransport({
    service: process.env.MAIL__SERVICE,
    auth: {
        user: process.env.MAIL__MAIL,
        pass: process.env.MAIL__PASSWORD,
    },
});
