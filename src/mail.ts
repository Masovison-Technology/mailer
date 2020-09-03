import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

import { sendOTPMail, sendTestMail } from './controllers';
import { validateOTPMail, validateTestMail } from './middlewares';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(express.json());
if (process.env.NODE_ENV !== 'production') app.use(logger('dev'));
else app.use(logger('tiny'));

app.post('/mailer/otp', validateOTPMail, sendOTPMail);
// app.post('/mailer/welcomeUser', validateWelcomeUserMail, sendWelcomeUserMail);
// app.post('/mailer/welcomeCustomer', validateWelcomeCustomerMail, sendWelcomeUserMail);
app.get('/mailer/test/:type/:email', validateTestMail, sendTestMail);


app.get('/mailer', (_, res) => res.status(200).json({ status: 'Online!' }));

app.use((_, res) => res.status(400).json({ error: 'Not found!' }));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));