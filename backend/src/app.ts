import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import env from './env';
import cors from 'cors';

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(
  cors({
    credentials: true,
    origin: env.CLIENT_URL,
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/health-check', (_req, res) => {
  res.status(200).json({ ok: true, message: 'Health check' });
});

app.use('/api', routes);

app.use((_req, res, _next) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

export default app;
