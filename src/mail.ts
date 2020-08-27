import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

import { sendOTPMail, sendTestMail } from './controllers';
import { validateOTPMail } from './middlewares';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(express.json());
if (process.env.NODE_ENV !== 'production') app.use(logger('dev'))

app.post('/otp', validateOTPMail, sendOTPMail);
// app.post('/mailer/welcomeUser', validateWelcomeUserMail, sendWelcomeUserMail);
// app.post('/mailer/welcomeCustomer', validateWelcomeCustomerMail, sendWelcomeUserMail);
app.get('/test/:type/:email', sendTestMail);


app.get('/', (_, res) => res.status(200).json({ status: 'Online!' }));
app.use((_, __, next) => {
    next(createError(404));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));