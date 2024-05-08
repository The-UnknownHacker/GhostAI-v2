# The second version of GhostAI using Angular, NestJS and the Gemini API

This project has been implemented entirely using the `TypeScript` language.

<img src="./images/gemini-angular-nestjs.png?raw=true">


## About This Project

GhostAI is an ai based on google gemini aiming to provide a free secure and opensource ai experience
This is the second version of ghostai and the original one can be found here - https://github.com/The-UnknownHacker/ghostai-server

## Features

This project currently supports:

- Multi-turn conversations (Chatbot application)
- Text Generation
- Image Processing
- Image Gen - Coming soon - located at  -[IMG](https://img.ghostai.me)


## Running the Project Locally
First, ensure you have the following installed:

1. NodeJS - Download and Install latest version of Node: [NodeJS](https://nodejs.org)
2. Git - Download and Install [Git](https://git-scm.com)

After that, use `Git bash` to run all commands if you are on Windows platform.

### Clone repository
In order to start the project use:

```bash
$ git clone https://github.com/The-UnknownHacker/GhostAI-v2.git
$ cd GhostAI-v2
```

### Get an API Key from Google AI Studio

Go to the [Google AI Studio](https://aistudio.google.com/app/) website and generate an API Key.

Next, create an `.env` file under the `/server` directory with the API key value you generated(You'll find a `.env.example` file as an example there):

```txt
API_KEY=<Your API Key goes here>
```

### Preview the Application
This project is based on Nx tooling. If you don't have Nx installed, you can do so by using:

```bash
npm add --global nx@latest
```

Open other command line window and run following commands:

```bash
npm install
nx serve client && nx serve server
```

Then you will need to open your favorite web browser with the following URL: [http://localhost:4200](http://localhost:4200/)


## License
MIT
