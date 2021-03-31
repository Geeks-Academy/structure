import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import routes from "./routes";
import connectDb from "./services/database.service";
import cors from 'cors'


const main = async () => {
  await connectDb();
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      credentials: true,
      origin:
        process.env.NODE_ENV === "production"
          ? process.env.PROD_URL
          : process.env.DEV_URL,
    })
  );

  app.use(express.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/health-check", (_req, res) => {
    res.status(200).json({ ok: true, message: "Health check" });
  });

  app.use("/api", routes);

  app.use((_req, res, _next) => {
    res.status(404).json({ message: "Not found" });
  });

  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
  });

  const PORT = +(process.env.port as string) || 4000;

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

main();
