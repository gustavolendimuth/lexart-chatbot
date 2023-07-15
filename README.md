# Lexart Chatbot

This project is a chatbot for Lexart, developed as part of the full stack developer position review. The chatbot is designed to interpret specific user commands, authenticate users, provide options related to loans and store conversation history in a database.

## Features
* Interpretation of specific terms to initiate a conversation.
* User authentication using a username and password.
* Options display related to loans upon mentioning the term "loan".
* Historic conversations storage and CSV export.
* Deployed on Railway.

## Instructions for setup

1. Clone the repository.
2. Run `npm install` to install all dependencies.
3. Create a `.env` file and populate it with required environment variables. (Refer to `.env.sample`).
4. Run `npm run dev` to start the development server.

## Instructions for usage

1. Start a conversation with the bot using terms "Hello", "Good", "I want".
2. Authenticate using your username and password. 
3. Start chatting and mention the term "loan" to see relevant options. 
4. Click on the displayed options to get more information along with links. 
5. Use the term "Goodbye" to finish the conversation. 
6. The conversation will be stored in the database and you can export it as CSV from the provided page. 

## Technologies used

* Node.js
* Express.js
* MySQL
* React.js

## Link to hosted application
[Lexart Chatbot](https://)
