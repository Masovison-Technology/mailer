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

    sendTestMail: async (type: string, email: string | null) => {
        const mailOptions = {
            from: process.env.MAIL__FROM,
            to: email ?? 'blazinasis@gmail.com',
            subject: 'Test Mail',
            // text: 'Test',
            html: type === 'verification'
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
        subject: 'OTP verification',
        // text: body.text,
        html: template(templateArgs),
    }
};

export default MailServices;