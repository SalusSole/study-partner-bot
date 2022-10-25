import { Context as TelegramContext } from "telegraf";

import { createJSON, readAudiosToJSON } from "./saveAudio";

export const finalizarGrabaciones = (ctx: TelegramContext) => {
  console.log("Received /finalizarGrabaciones command");
  try {
    const data = readAudiosToJSON();
    if (data && data.saveAudios) {
      if (typeof data === "object") {
        createJSON({ ...data, saveAudios: false });
      } else {
        createJSON({ ...JSON.parse(data), saveAudios: false });
      }
    } else {
      return ctx.reply(
        "No se ha registrado ninguna lista de audios para ayudarte a estudiar. Por favor usa el comando /iniciarGrabaciones"
      );
    }
    return ctx.reply(
      "¿Estás list@ para que empecemos a estudiar? Usa el comando /aEstudiar"
    );
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("Error occured");
  }
};
