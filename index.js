require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { createCanvas, loadImage } = require("canvas");
const path = require("path");
const Connected = require("./connection.js");
const { prompt, styling } = require("./prompt.js");

const PORT = 3000;

function loadBackgroundImage() {
  Connected()
    .then((_connection) => {
      const body = {
        prompt: prompt(),
        guidance_scale: 1.5,
        num_images: 1,
        image: {
          size: "widescreen_16_9"
        },
        styling: styling()
      };

      const headers = {
        "x-freepik-api-key": process.env.FREEPIK_API_KEY,
        "Content-Type": "application/json"
      };

      return Promise.all([
        axios.post("https://api.freepik.com/v1/ai/text-to-image", body, {
          headers
        }),
        axios.get("https://zenquotes.io/api/random")
      ]);
    })
    .then(([imageResponse, quoteResponse]) => {
      // Extract the base64
      let base64 = imageResponse.data.data[0].base64;

      let imagedata = base64.replace(/^data:image\/\w+;base64,/, "");

      // Decode the base64 to binary
      let imageBuffer = Buffer.from(imagedata, "base64");

      return Promise.all([
        loadImage(imageBuffer),
        Promise.resolve(quoteResponse.data[0].q)
      ]);
    })
    .then(async ([image, quote]) => {
      const { setWallpaper } = await import("wallpaper");
      let text = quote;
      let width = 1920;
      let height = 1080;
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");

      let rectX = 1200;
      let rectY = 100;
      let rectWidth = 600;

      let lineHeight = 38;
      let fontSize = 32;
      let paragraph = [];
      let padding = 32;
      let maxTextWidth = rectWidth - padding * 2;

      let textCenter = rectX + rectWidth / 2;
      let textX = textCenter;
      let textY = rectY + padding + fontSize;
      let line = "";
      let words = text.split(" ");

      ctx.font = `italic ${fontSize}px Rockwell`;

      for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + " ";

        if (ctx.measureText(testLine).width > maxTextWidth && i > 0) {
          paragraph.push(line);
          line = words[i] + " ";
        } else {
          line = testLine;
        }
      }
      paragraph.push(line);

      let rectHeight = paragraph.length * lineHeight + padding * 2;

      // Draw background image
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Create rect gradient
      let gradient = ctx.createLinearGradient(
        rectX,
        rectY,
        rectX,
        rectY + rectHeight
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, .7)");
      gradient.addColorStop(1, "rgba(255, 255, 255, .5)");

      // Draw rect
      ctx.fillStyle = gradient;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.rect(rectX, rectY, rectWidth, rectHeight);
      ctx.stroke();
      ctx.fill();

      // Write Text
      ctx.fillStyle = "blue";

      for (let sentence of paragraph) {
        textX = textCenter - ctx.measureText(sentence).width / 2;
        ctx.fillText(sentence, textX, textY);
        textY += lineHeight;
      }

      let filename = uuidv4();
      let filePath = path.join(
        "C:/Programs and Coding/Pics/wallpapers",
        `${filename}.png`
      );

      const buffer = canvas.toBuffer("image/png");
      fs.writeFileSync(filePath, buffer);
      console.log(`Image saved as ${filename}.png`);
      return setWallpaper(filePath);
    })
    .catch((err) => {
      if (err.code === "ENOTFOUND") {
        setTimeout(loadBackgroundImage(), 1000 * 60 * 5); // Reload after 5 mins
      }
      console.log("!Error: \n", err);
    });
}

loadBackgroundImage();
