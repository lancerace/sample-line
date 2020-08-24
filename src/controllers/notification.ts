import express, { Request, Response, Router } from "express";
import config from '../config';
import axios from 'axios';
import qs from 'query-string';
const lineNotificationConfig = config[process.env.ENVIRONMENT].line.notification;

const router: express.Router = express.Router();

/*router.post('/pushpost', async (req: Request, res: Response) => {
    //https://notify-bot.line.me/doc/en/
    try {
        const response = await axios.get(lineNotificationConfig.authorizeURL, { 
            params: {
                response_type: 'code',
                client_id: lineNotificationConfig.clientId,
                redirect_url: config[process.env.ENVIRONMENT].endpoint + 'api/v1/notification/callback',
                scope: 'notify',
                state: 'NO_STATE', //change value to hash generated value from  user's session ID if concern with CSRF attack,
                response_mode:'form_post'
            }
        });

        console.log(`res`);
        console.log(response.data);
        res.render(response.data);
    } catch (err) {
        console.log(`[notification.ts] err:${err}`);
    }

},async(req,res)=>{console.log("/push cb:",console.log("cb req:",req))})

*/
/*router.post('/callback', async (req, res) => {
    console.log("callback");
    console.log(req);

})*/

router.post('/push', async (req: Request, res: Response) => {
    console.log("poush");
    try {
        //https://notify-bot.line.me/doc/en/ , https://github.com/1010code/LINE-Notify-tutorial , https://notify-bot.line.me/my/
        const response = await axios.post('https://notify-api.line.me/api/notify', qs.stringify({ message: 'Notification Message test' }), {
            headers: {
                'Authorization': `Bearer EDjrFxukJ9BnuBWA0pbmDUYUCtAQY3vPH6gTUr2XoP3`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        console.log('response:', response.data);

        //forward response
        res.json(response.data);
    } catch (err) { console.log("err", err) }
});


export default router;