import { Request, Response } from 'express';
import MailServices from '../services';

export const sendOTPMail = async (req: Request, res: Response) => {
    try {
        const result = MailServices.sendOTPMail(req.body);;
        return res.status(200).json({ result });
    } catch (error) {
        return res.status(400).json({ error })
    }
};

export const sendTestMail = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const type = req.params.type;
        const result = MailServices.sendTestMail(type, email);
        return res.status(200).json({ result });
    } catch (error) {
        return res.status(400).json({ error });
    }
};

