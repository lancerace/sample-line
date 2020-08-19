import config from '../../config';
import * as line from '@line/bot-sdk';
const lineConfig = config[process.env.ENVIRONMENT];
const client = new line.Client(lineConfig.line);

export const initMessageDialog = (event)=>{

    //if message is type text
    switch(event.message.text){
        case 'hi': {
            return client.replyMessage(event.replyToken, {
                type: 'text',
                text: "how may i help you?",
                sender: {
                    name: "Call levels bot",
                    iconUrl: "https://img.icons8.com/all/500/bot.png"
                },
                quickReply: {
                    items: [
                        {
                            type: "action",
                            imageUrl: "https://image.shutterstock.com/z/stock-photo-traditional-japanese-tempura-shrimps-with-sauce-deep-fried-shrimps-top-view-on-the-background-1031569036.jpg",
                            action: {
                                "type": "message",
                                "label": "Tempura",
                                "text": "Tempura"
                            }
                        },
                        {
                            type: "action",
                            action: {
                                type: "cameraRoll",
                                label: "Send photo"
                            }
                        },
                        {
                            type: "action",
                            action: {
                                type: "camera",
                                label: "Open camera"
                            }
                        },
                        {
                            type: "action",
                            action: {
                                "type": "location",
                                "label": "Send location"
                            }
                        }
                    ]
                }
            }, true);
        }
        case 'Tempura':{
            return client.replyMessage(event.replyToken,[{
                type:'text',
                text:"$5, enjoy!\uDBC0\uDC84",
                sender: {
                    name: "Call levels bot",
                    iconUrl: "https://img.icons8.com/all/500/bot.png"
                },
            },{
                type:'sticker',
                packageId: "11537",
                stickerId: "52002734"
            }])
        }
}

}