# Telegram RAT (Remote Access Trojan) Experiment

Remote Access Trojan Experiment in Telegram Desktop (Windows)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Security Warning](#security-warning)
6. [Contributing](#contributing)
7. [License](#license)

## 1. Introduction

The Telegram RAT (Remote Access Trojan) Experiment is a Node.js application designed for educational purposes only. It demonstrates how a simple remote access tool can be implemented using the Telegram Bot API. This tool allows users to remotely zip and send selected data from a Windows computer to a specified Telegram user or group.

**Disclaimer**: This application is meant for educational and experimental purposes only. It should not be used for any malicious activities. Unauthorized access to someone else's computer is illegal and unethical.

## 2. Features

- Zip and send specified data from a Windows computer to a Telegram user or group.
- Simple Telegram bot interface for initiating the process.
- Customizable list of directories to ignore during zipping.

## 3. Installation

Before you begin, make sure you have [Node.js](https://nodejs.org/) installed on your Windows machine.

1. Clone the repository:

   ```bash
   git clone git@github.com:uwussimo/telegram-rat.git
   ```

2. Navigate to the project directory:

   ```bash
   cd telegram-rat
   ```

3. Install the required dependencies using npm:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project directory and add your Telegram Bot token and user ID:

   ```dotenv
   BOT_TOKEN=your_telegram_bot_token
   USER_ID=your_telegram_user_id
   ```

5. Start the application:
   ```bash
   npm start
   ```

### Build command

The "build" command in your `package.json` file is used to create a binary executable file from your Node.js application using the "pkg" package. This allows you to package your Node.js application into a standalone executable that can be run on Windows without requiring Node.js to be installed on the target machine. Here's what your "build" script does:

```json
"scripts": {
  "build": "pkg -t node14-win-arm64 index.js -o build.exe"
}
```

Let's break down this script:

- `"build"`: This is the name of the script that you can run using `npm run build`.

- `pkg`: This is the command-line tool for packaging Node.js applications into executable files.

- `-t node14-win-arm64`: This specifies the target platform and architecture for the executable. In this case, it's targeting Node.js version 14 on Windows for the ARM64 architecture. You can change this flag to match your target platform and architecture.

- `index.js`: This is the entry point of your Node.js application, the main file that will be bundled into the executable.

- `-o build.exe`: This specifies the name of the output executable file. In this case, it will create a file named "build.exe" in your project directory.

To build your Node.js application into an executable, you can run the following command in your project directory:

```bash
npm run build
```

After running this command, you should have a standalone executable file (in this case, "build.exe") that you can distribute and run on Windows machines without needing to install Node.js separately.

## 4. Usage

1. Start a conversation with the Telegram bot.
2. Use the `/execute` command to initiate the zipping and sending process.
3. Wait for the bot to notify you when the process is complete.
4. The zipped data will be sent to your Telegram chat as a document.

## 5. Security Warning

This application is purely educational and should not be used for malicious purposes. Unauthorized access to someone else's computer or data is illegal and unethical. Always respect privacy and adhere to ethical guidelines when using such tools.

## 6. Contributing

Contributions to this project are welcome. If you have any ideas for improvements or would like to report a bug, please create an issue or submit a pull request on the [GitHub repository](repository-url).

## 7. License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

**Note**: This application is for educational purposes only, and the authors and maintainers are not responsible for any misuse or illegal activities. Use it responsibly and in accordance with the law.
