import express from "express";
import * as line from '@line/bot-sdk';
import config from '../config';
import { initMessageDialog } from '../dialogs/message';
import notificationController from './notification';
const router: express.Router = express.Router();
const lineConfig = config[process.env.ENVIRONMENT].line;
const client = new line.Client(lineConfig);

router.use("/notification", notificationController);

router.post("/webhook", line.middleware(lineConfig), async (req, res) => {
    console.log("webhook");
    console.log("body.event:", req.body);
    console.log(req.headers['x-line-signature']);
    // const flag = line.validateSignature("", lineConfig.channelSecret, req.headers['x-line-signature'] as string);
    Promise.all(req.body.events.map(event => {
        console.log('type:', event.type);
        //console.log('messasge type', event.message.type);
        //console.log('messasge source', event.source);
        //console.log('messasge message', event.message);
        if (event.type !== 'message' || event.message.type !== 'text') {
            console.log("resolve null");
            return Promise.resolve(null);
        }

        initMessageDialog(event);

    }))
        /*Promise
        .all(req.body.events.map(handleEvent))*/
        .then(res => { console.log("res:", res) }).catch(err => { console.log("err:", err) });
    res.json();

});




function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }

    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: event.message.text
    });
}
export default router;