# Tooter app (MERN)

## Description

Tooter is a real-time messaging application that allows users to communicate with each other via text messages.

## Features

- **Messaging**: Users can send and receive messages privately with other users.
- **Real Time Communication**: Messages are delivered instantly in real time, providing a smooth communication experience.
  
  ![realtime](https://github.com/P666R/Tooter/assets/110221853/527b91ec-f064-4c59-b7d9-a242f2a79d33)
  <hr>
- **User Authentication**: Secure user authentication system ensures only registered users can access the application.
  
  ![signuplogin](https://github.com/P666R/Tooter/assets/110221853/b0c895fa-30ea-42a4-b884-11127280be77)
  <hr>
- **Like Functionality**: Allows users to like and unlike comments.
  
  ![like](https://github.com/P666R/Tooter/assets/110221853/e74426dc-58df-4d74-8e49-666ef4088ea0)
  <hr>
- **@ Feature**: @ feature shows the list of eligible users in the chat.
  
  ![feat@](https://github.com/P666R/Tooter/assets/110221853/fd4eafb0-d1ce-48b1-ac0d-993a8daaf2b7)
  <hr>
- **Emoji Options**: emoji options provided in the chat message.
  
  ![emoji](https://github.com/P666R/Tooter/assets/110221853/65a7a30c-20c2-4bee-9b77-9ba2bddc408f)
  <hr>

## Installation

You will need to add the following environment variables to your .env file

`PORT=...`
`MONGO_DB_URI=...`
`JWT_SECRET=...`
`NODE_ENV=...`

To run Tooter locally, follow these steps:

1. Clone the repository: git clone https://github.com/P666R/Tooter.git
2. Navigate to the project directory: cd Tooter
3. Install dependencies: npm install
4. Start the server: npm run server
5. Navigate to the frontend directory: cd frontend
6. Install dependencies: npm install
7. Start the server: npm run dev

## Usage

1. **Messaging**:

- Log in to your account.
- Navigate to the chat section.
- Select a user from the contact list to start a conversation.
- Type your message in the input field and press Enter to send.

2. **User Authentication**:

- Sign up for a new account if you're a new user.
- Log in to your account with your credentials.
- Log out of your account when you're done using the application.

## Contributing

Contributions to Tooter are welcome! Here's how you can contribute:

- Fork the repository
- Create a new branch
- Make your changes
- Test your changes
- Submit a pull request
