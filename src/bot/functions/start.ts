import { Context as TelegramContext } from "telegraf";

export const start = (ctx: TelegramContext) => {
  console.log("Received /start command");
  try {
    return ctx.reply(
      `Bienvenid@ a tu nuevo compañero de estudio ${ctx.from?.first_name}`
    );
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("Error occured");
  }
};
