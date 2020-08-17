import express, { Request, Response, json } from "express";
import * as line from '@line/bot-sdk';
import config from '../config';
const router: express.Router = express.Router();

const lineConfig = config[process.env.ENVIRONMENT];
console.log(lineConfig.line);
router.post("/webhook", line.middleware(lineConfig.line), async (req: Request, res: Response) => {
    console.log("webhook");
    console.log("body.event:", req.body.events);

    const client = new line.Client(lineConfig.line);
    Promise.all(req.body.events.map(event => {
        console.log('type:', event.type);
        console.log('messasge type', event.message.type);
        if (event.type !== 'message' || event.message.type !== 'text') {
            return Promise.resolve(null);
        }

        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: event.message.text
        });
    }))
        .then(result => res.json({ message: "webhook", result: result }));



});
export default router;