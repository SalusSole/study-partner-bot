import { Telegraf } from "telegraf";

import { aEstudiar } from "./functions/aEstudiar";
import { finalizarGrabaciones } from "./functions/finalizarGrabaciones ";
import { iniciarGrabaciones } from "./functions/iniciarGrabaciones";
import { saveAudio } from "./functions/saveAudio";
import { start } from "./functions/start";

const bot = new Telegraf(process.env.TELEGRAM_TOKEN as string);

bot.start(start);
bot.command("iniciarGrabaciones", iniciarGrabaciones);
bot.command("finalizarGrabaciones", finalizarGrabaciones);
bot.command("aEstudiar", aEstudiar);

bot.on("voice", saveAudio);

export const handler = async (event: any) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: "" };
  } catch (e) {
    console.error("error in handler:", e);
    return {
      statusCode: 400,
      body: "This endpoint is meant for bot and telegram communication"
    };
  }
};

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

export default bot;
