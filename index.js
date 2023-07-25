import "dotenv/config";
import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello" }],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  })
  .catch((e) => {
    console.log(e);
  });