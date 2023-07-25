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
const exitCommands = ["exit", "quit"]; // Define exit commands here

function isExitCommand(input) {
  return exitCommands.includes(input.toLowerCase().trim());
}

function closeChat() {
  console.log("Chat ended. Goodbye!");
  userInterface.close();
  process.exit(0);
}

userInterface.prompt();

userInterface.on("line", async (input) => {
    if (isExitCommand(input)) {
        closeChat(); // Only close the chat if the user types an exit command
        return;
      }
    try {
        const res = await openai
            .createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: input }],
            });
        console.log("AI: ", res.data.choices[0].message.content);
    } catch(e) {
        console.log(e);
    }

    userInterface.prompt();
});
    
userInterface.on("close", () => {
    process.exit(0); // Simply exit the process when the user closes the chat interface
});
