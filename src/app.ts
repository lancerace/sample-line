require('dotenv').config();
import cors from 'cors';
import express from 'express';
import bodyParser from "body-parser";
import mainController from "./controllers";

// Express init
const app = express();
app.use(bodyParser.json());
app.use(cors());


app.listen(process.env.PORT || 3000, async () => {
    console.log(`Server started, listening to port ${process.env.PORT}`);
});


app.use("/api/v1/", mainController);
