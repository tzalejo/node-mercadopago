import express from 'express';
import morgan from 'morgan';
import path from 'path';
import paymentRoute from './routes/payment.routes.js';
import { PORT } from './config.js';

const app = express();

app.use(morgan('dev'));
app.use(paymentRoute);
app.use(express.static(path.resolve('src/public')));
app.listen(PORT);

console.log('Server on port ', PORT);
