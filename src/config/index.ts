require("dotenv").config({});


const config = {
    PRODUCTION: {
        endpoint: 'https://line-sample-dev.herokuapp.com/',
        environment: process.env.ENVIRONMENT || "PRODUCTION",
        database: {
        },
        line: {
            channelSecret: process.env.LINE_CHANNEL_SECRET,
            channelAccessToken: process.env.LINE_ACCESS_TOKEN,
            notification: {
                authorizeURL: process.env.NOTIFICATION_AUTHORIZE_URL,
                clientId:process.env.NOTIFICATION_CLIENT_ID,
                secret:process.env.NOTIFICATION_CLIENT_SECRET
            }
        }
    },
    DEVELOPMENT: {
        endpoint: 'https://96679e7eeb7c.ngrok.io/',
        environment: process.env.ENVIRONMENT || "DEVELOPMENT",
        database: {},
        line: {
            channelSecret: process.env.LINE_CHANNEL_SECRET,
            channelAccessToken: process.env.LINE_ACCESS_TOKEN,
            notification: {
                authorizeURL: process.env.NOTIFICATION_AUTHORIZE_URL,
                clientId:process.env.NOTIFICATION_CLIENT_ID,
                secret:process.env.NOTIFICATION_CLIENT_SECRET
            }
        }
    }
}


export default config;
