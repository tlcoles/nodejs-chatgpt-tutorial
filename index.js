import "dotenv/config";
import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async (input) => {
    await openai
    .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
    })
    .then((res) => {
        console.log("AI: ", res.data.choices[0].message.content);
        userInterface.prompt();
    })
    .catch((e) => {
        console.log(e);
    });
});
