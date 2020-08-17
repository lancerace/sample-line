import express, { Request, Response, json } from "express";
const router: express.Router = express.Router();


router.get("/webhook", async (request: Request, response: Response) => {

    console.log("webhook");
    console.log(response);

    return response.json({ message: "webhook" })
});
export default router;