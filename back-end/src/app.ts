import express, { json, Request, Response } from "express";
import cors from "cors";
import router from "./routes";

const app = express();
app.use(json());
app.use(cors());
app.get("/health", (_req: Request, res: Response): Response => {
	return res.json("OK");
});
app.use(router);

export default app;
