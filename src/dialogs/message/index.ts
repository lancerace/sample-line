import config from '../../config';
import * as line from '@line/bot-sdk';
const lineConfig = config[process.env.ENVIRONMENT];
const client = new line.Client(lineConfig.line);

export const initMessageDialog = (event)=>{

    console.log('event:',event);
    console.log('source:',event.source);
    //if message is type text
    switch(event.message.text.toLowerCase()){
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
        case 'tempura':{
            return client.replyMessage(event.replyToken,[{
                type:'text',
                text:"$5, enjoy!\uDBC0\uDC84",
                sender: {
                    name: "Call levels bot",
                    iconUrl: "https://img.icons8.com/all/500/bot.png"
                },
                
            },
            {
                type:'sticker',
                packageId: "11537",
                stickerId: "52002734",
                sender: {
                    name: "Call levels bot",
                    iconUrl: "https://img.icons8.com/all/500/bot.png"
                }
            }])}
        case 'confirm': {
            return client.replyMessage(
                event.replyToken,
                {
                    type: 'template',
                    altText: 'Confirm alt text',
                    template: {
                        type: 'confirm',
                        text: 'Do it?',
                        actions: [
                            { label: 'Yes', type: 'message', text: 'Yes!' },
                            { label: 'No', type: 'message', text: 'No!' },
                        ],
                    },
                }
            )
        }
        case 'carousel':
            return client.replyMessage(
                event.replyToken,
                {
                    type: 'template',
                    altText: 'Carousel alt text',
                    template: {
                        type: 'carousel',
                        columns: [
                            {
                                thumbnailImageUrl: "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-blue-round-button-illustration-image_1215549.jpg",
                                title: 'hoge',
                                text: 'fuga',
                                actions: [
                                    { label: 'Go to line.me', type: 'uri', uri: 'https://line.me' },
                                    { label: 'Say hello1', type: 'postback', data: 'hello こんにちは' },
                                ],
                            },
                            {
                                thumbnailImageUrl: "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-blue-round-button-illustration-image_1215549.jpg",
                                title: 'hoge',
                                text: 'fuga',
                                actions: [
                                    { label: '言 hello2', type: 'postback', data: 'hello こんにちは', text: 'hello こんにちは' },
                                    { label: 'Say message', type: 'message', text: 'Rice=米' },
                                ],
                            },
                        ],
                    },
                }
            );
        //push notification example
        case 'push': {
            return client.pushMessage(event.source.userId, { type: 'text', text: "push notification test" }, false);

        }
}

}