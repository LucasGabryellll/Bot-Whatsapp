import express, { Request, Response } from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.listen(5000, () => {
    console.log("Server  is running in: http://localhost:5000");
})