import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes';
import connectDb from './services/database.service';

const main = async () => {
  await connectDb();
  const app = express();
  
  app.use(express.json());
  
  app.get('/health-check', (_req, res) => {
    res.status(200).json({ ok: true, message: 'Health check' });
  })
  
  app.use('/api', routes);
  
  app.use((_req, res, _next) => {
    res.status(404).json({ message: 'Not found' });
  });
  
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
  });
  
  const PORT = +(process.env.port as string) || 4000;
  
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

main()
