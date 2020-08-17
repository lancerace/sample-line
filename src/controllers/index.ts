import express, { Request, Response, json } from "express";
import line from '@line/bot-sdk';
import config from '../config';
const router: express.Router = express.Router();

const lineConfig = config[process.env.ENVIRONMENT];

router.post("/webhook", line.middleware(lineConfig), async (req: Request, res: Response) => {
    console.log("webhook");
    //console.log(response);

    return res.json({ message: "webhook",event:req.body.events })
});
export default router;