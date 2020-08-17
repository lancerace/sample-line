require("dotenv").config({});


const config = {
    PRODUCTION: {
        environment: process.env.ENVIRONMENT || "PRODUCTION",
        database: {
        },
        line: {
            channelSecret: process.env.LINE_CHANNEL_SECRET,
            channelAccessToken: process.env.LINE_ACCESS_TOKEN
        }
    },
    DEVELOPMENT: {
        environment: process.env.ENVIRONMENT || "DEVELOPMENT",
        database: {},
        line: {}
    }
}


export default config;
