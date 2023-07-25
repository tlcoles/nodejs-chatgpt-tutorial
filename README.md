# Interactive Chat with GPT-3.5-turbo and Node.js

Based on the [FreeCodeCamp tutorial](https://www.freecodecamp.org/news/how-to-build-a-chatbot-with-openai-chatgpt-nodejs-and-react/) created by Njoku Samson Ebere [(@eberegit)](https://github.com/EBEREGIT), this repository contains a simple Node.js application that allows you to have an interactive chat with the GPT-3.5-turbo model using the OpenAI API. The chat takes place in the terminal, where you can act as a user and converse with the AI model.

Ebere's original instructions were enhanced in the following ways:

* add dotenv package to load environment variables for OpenAI credentials in Node.js

* prompt user to use HELLO and GOODBYE to start and stop chat

* allow GOODBYE command to quit and confirm exit with goodbye message


## Dependencies

* dotenv: ^16.3.1
* openai: ^3.3.0

## Prerequisites

Before running the chat application, ensure you have the following:

1. Node.js installed on your machine
2. An OpenAI API key (Sign up for an API key at https://beta.openai.com/signup/)

## Setup

1. Clone this repository to your local machine.
2. Install the required dependencies by running the following command in the terminal: `npm install`

3. Create a `.env` file in the root directory of the project and add your OpenAI API key and organization details: OPENAI_ORGANIZATION=**YOUR_ORGANIZATION**, OPENAI_API_KEY=**YOUR_API_KEY**. 

    Replace `YOUR_ORGANIZATION` and `YOUR_API_KEY` with your actual OpenAI organization and API key.

## Usage

To start the interactive chat, run the following command in the terminal:

`node index`

Once the chat is initiated, you can type messages as a user, and the application will send them to the GPT-3.5-turbo model for processing. The model's responses will be displayed in real-time on the terminal.

To exit the chat and return to the terminal prompt, simply type "goodbye" and press Enter.

## Important notes

Please note that using the OpenAI API incurs costs based on your API usage and subscription plan. Make sure you review OpenAI's pricing details before extensively using the API.

As befitting the tutorial, this repository and this README were enhanced by queries and responses between Tammi L. Coles and ChatGPT.

## Contact

Tammi L. Coles  
Berlin, Germany  
Social media: @tlcoles 
