require('dotenv').config();
import cors from 'cors';
import express from 'express';
import bodyParser from "body-parser";
import mainController from "./controllers";
import { JSONParseError, SignatureValidationFailed } from '@line/bot-sdk';
// Express init
const app = express();

//bodyparser conflict with line middleware, https://line.github.io/line-bot-sdk-nodejs/api-reference/middleware.html#usage
//app.use(bodyParser.json());
app.use(cors());


app.listen(process.env.PORT || 3000, async () => {
    console.log(`Server started, listening to port ${process.env.PORT}`);
});


app.use("/api/v1", mainController);


//error handler
app.use((err, req, res, next) => {
    if (err instanceof SignatureValidationFailed) {
        console.log("error handler:",err.signature);
        res.status(401).send(err.signature)
        return
    } else if (err instanceof JSONParseError) {
        console.log("error handler:",err.raw);
        res.status(400).send(err.raw)
        return
    }
    next(err) // will throw default 500
})
