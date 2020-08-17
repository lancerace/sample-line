import express, { Request, Response } from "express";
const router: express.Router = express.Router();


router.get("/webhook", async (request: Request,response:Response)=>{

    console.log("webhook");
    console.log(response);
});
export default router;