import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes';
import cors from 'cors';
import { errorHandler } from './middlewares/ErrorHandler';
import connectDb from './services/database.service';

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, PATCH, OPTIONS');
  next();
});
app.use(async (err: Error, req: Request) => {
  await errorHandler.handleError(err, req);
 });

app.get('/health-check', (_req, res) => {
  res.status(200).json({ ok: true, message: 'Health check' });
});

app.use('/api', routes);

// app.use((_req, res, _next) => {
//   res.status(404).json({ message: 'Not found' });
// });

// app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Internal server error' });
// });

connectDb();

const PORT = +(process.env.port as string) || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// export default app;
