const express = require("express");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// api would generate images
const openai = new OpenAIApi(config);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Dalle_Routes got activated" });
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong!!" });
  }
});

module.exports = router;
