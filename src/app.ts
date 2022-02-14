import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import errorHandler from './middlewares/error';
// import ipRateLimit from './ip';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);
// app.use(ipRateLimit);

export default app;
