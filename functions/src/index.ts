import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

const bot = express();

bot.use(cors({origin: true}));

bot.post("/", async (req, res) => {
  return res.status(200).send({
    method: "sendMessage",
    text: "Hello, \n You sent us message: XXX",
  });
});

export const router = functions.https.onRequest(bot);
