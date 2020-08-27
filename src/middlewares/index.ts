import { Request, NextFunction, Response } from 'express';
const ValidationError = { error: 'Params are not valid!' };

export function validateOTPMail(req: Request, res: Response, next: NextFunction) {
    if (
        req.body.from !== null && req.body.subject !== null &&
        req.body.text !== null && req.body.to !== null &&
        req.body.code !== null && req.body.name !== null
    ) {
        next();
    }
    return res.status(400).json(ValidationError);
}

export function validateTestMail(req: Request, res: Response, next: NextFunction) {
    if (req.params.type === null || req.params.email === null) {
        return res.status(400).json({ error: "Invalid params" });
    }
    next();
}