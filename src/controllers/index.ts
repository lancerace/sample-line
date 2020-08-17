import express, { Request, Response, json } from "express";
import * as line from '@line/bot-sdk';
import config from '../config';
const router: express.Router = express.Router();

const lineConfig = config[process.env.ENVIRONMENT];
console.log(lineConfig.line);
router.post("/webhook", line.middleware(lineConfig.line), async (req: Request, res: Response) => {
    console.log("webhook");
    //console.log(response);
    Promise
    .all(req.body.events.map(event=>{console.log("event",event)})
    .then(res=> res.json({ message: "webhook",event:req.body.events }));



});
export default router;