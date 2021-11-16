import { http } from "./app";
import dotenv from "dotenv";
dotenv.config();

console.log(`Server started at http://localhost:${process.env.PORT}`);

http.listen(process.env.PORT);
