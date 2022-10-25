import { Context as TelegramContext } from "telegraf";

import { readAudiosToJSON } from "./saveAudio";

export const aEstudiar = (ctx: TelegramContext) => {
  console.log("Recived /aEstudiar command");
  try {
    const data = readAudiosToJSON();
    let dataParsed;
    if (typeof data === "object") {
      dataParsed = data;
    } else {
      dataParsed = JSON.parse(data);
    }
    ctx.reply("Esta es la respuesta correcta", { reply_to_message_id: 13 });
  } catch (e) {
    console.error("error in action:", e);
    return ctx.reply("Error occured");
  }
};
