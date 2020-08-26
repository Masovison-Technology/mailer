import VerificationTemplate from '../templates/verification';
import { transporter } from '../config';

type TTemplate = (args: any) => string;

const MailServices = {

    sendOTPMail: async (body: any) => {
        const mailOptions = getMailOptions(
            body,
            VerificationTemplate,
            { name: body.name, code: body.code },
        );
        return await transporter.sendMail(mailOptions);
    },

    sendTestMail: async (body: any) => {
        const mailOptions = {
            from: process.env.MAIL__FROM,
            to: 'blazinasis@gmail.com',
            subject: 'Test Mail',
            text: 'Test',
            html: body.type === 'verification'
                ? VerificationTemplate({ name: 'Ashish Kafle', code: '123456' })
                : ''
        };

        return await transporter.sendMail(mailOptions);
    }
}

const getMailOptions = (body: any, template: TTemplate, templateArgs: any) => {
    return {
        from: process.env.MAIL__FROM ?? 'Kaha <kaha@masovision.com>',
        to: body.to,
        subject: body.subject,
        text: body.text,
        html: template(templateArgs),
    }
};

export default MailServices;