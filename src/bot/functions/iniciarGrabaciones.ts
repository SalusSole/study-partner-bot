import { Context as TelegramContext } from "telegraf";

import { createJSON } from "./saveAudio";

export const iniciarGrabaciones = (ctx: TelegramContext) => {
  console.log("Received /iniciarGrabaciones command");
  try {
    createJSON(JSON.stringify({ saveAudios: true }));
    return ctx.reply(
      "Mándame las grabaciones de voz que quieres que use para ayudarte a estudiar. Cuando finalices usa el comando /finalizarGrabaciones"
    );
  } catch (e) {
    console.error("error in action:", e);
    return ctx.reply("Error occured");
  }
};
