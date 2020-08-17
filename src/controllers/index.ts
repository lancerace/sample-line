import express, { Request, Response, json } from "express";
import * as line from '@line/bot-sdk';
import config from '../config';
const router: express.Router = express.Router();

const lineConfig = config[process.env.ENVIRONMENT];
console.log(lineConfig.line);
router.post("/webhook", line.middleware({ channelSecret: 'c1bd7cd4aadce138f53f40a5cce94267',
channelAccessToken:
 'DqMHryHl8/AFJwbpGT8U7u5S14UtrfrctyXXTTkb6OdNFnwX1/1jKIsBaCj0Ybor6HkT+zUEat3XmPmbpzkwwPwWFdRGU+NiMMMO3DvUE7Zs2V+36eooKJiSaJUOG05Zl5c2myAmJL8PG29fo0i2dQdB04t89/1O/w1cDnyilFU=' }), async (req, res) => {
    console.log("webhook");
    console.log("body.event:", req.body.events);
console.log(req.header);
console.log(req.headers);
console.log(req.headers["x-line-signature"]);

//line.validateSignature(req.body,lineConfig.line.channelSecret);

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
    })).then(result => res.json({ message: "webhook"})).catch((err) => {
            console.error(err);
            res.status(500).end();
        });



});
export default router;