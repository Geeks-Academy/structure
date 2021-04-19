import dotenv from 'dotenv';
dotenv.config();
import connectDb from "./services/database.service";
import app from './app';

const main = async () => {
  await connectDb();

  const PORT = +(process.env.port as string) || 4000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}


main();

