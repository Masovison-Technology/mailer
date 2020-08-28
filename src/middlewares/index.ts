import { Request, NextFunction, Response } from 'express';
const ValidationError = { error: 'Params are not valid!' };

export function validateOTPMail(req: Request, res: Response, next: NextFunction) {
    if (
        req.body.to !== null && req.body.code !== null &&
        req.body.name !== null
    ) {
        return next();
    }
    return res.status(400).json(ValidationError);
}

export function validateTestMail(req: Request, res: Response, next: NextFunction) {
    if (req.params.type === null || req.params.email === null) {
        return res.status(400).json({ error: "Invalid params" });
    }
    next();
}