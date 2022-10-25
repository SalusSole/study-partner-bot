import fs from "fs";
import { Context } from "telegraf";

export const saveAudio = (ctx: Context) => {
  console.log("Received audio message");
  try {
    const messageId = ctx.message?.message_id;

    addAudioIdToJSON(messageId);
    readAudiosToJSON();
  } catch (e) {
    console.error("error in action:", e);
    return ctx.reply("Error occured");
  }
};

const addAudioIdToJSON = (id: any) => {
  const audios = readAudiosToJSON();

  console.log(audios);
  console.log(typeof audios);

  if (audios) {
    let newAudios;
    if (typeof audios === "object") {
      newAudios = { ...audios, [id - 1]: id };
    } else {
      newAudios = { ...JSON.parse(audios), [id]: id };
    }
    createJSON(newAudios);
  }
};

export const createJSON = (data = {}) => {
  fs.writeFile("audios.json", JSON.stringify(data), "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("JSON file has been saved.");
  });
};

export const readAudiosToJSON = (createJSONFile?: boolean) => {
  try {
    const data = fs.readFileSync("audios.json", "utf-8");
    console.log(data);
    console.log(JSON.parse(data));
    return JSON.parse(data);
  } catch (err: any) {
    if (createJSONFile) {
      if (err.message.includes("no such file")) {
        return createJSON();
      }
    } else {
      return;
    }
  }
};
