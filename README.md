# Cash Machine

## Requirements

### The problem

> Develop a solution that simulate the delivery of notes when a client does a withdraw in a cash machine.
> The basic requirements are the follow:
> - Always deliver the lowest number of possible notes;
> - It's possible to get the amount requested with available notes;
> - The client balance is infinite;
> - Amount of notes is infinite;
> - Available notes $ `100,00`; $ `50,00`; $ `20,00` e $ `10,00`

### Examples

```
Entry: 30.00
Result: [20.00, 10.00]
```

```
Entry: 80.00
Result: [50.00, 20.00, 10.00]
```

```
Entry: 125.00
Result: throw NoteUnavailableException
```

```
Entry: -130.00
Result: throw InvalidArgumentException
```

```
Entry: NULL
Result: [Empty Set]
```

## Installation and Setup

### Prerequisites

#### Using Docker (Recommended)
- [Docker](https://www.docker.com/) installed on your system
- No Node.js installation required

#### Using Node.js Directly
- [Node.js](https://nodejs.org/) (version 10 or higher recommended)
- [Yarn](https://yarnpkg.com/) package manager

### Technologies Used

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Nodemon](https://nodemon.io/) - Utility that monitors for changes and automatically restarts the server
- [Tape](https://github.com/ljharb/tape) - TAP-producing test harness for Node.js

### Available Scripts

- `yarn start` - Start the application in development mode with auto-reload (uses [nodemon](https://nodemon.io/))
- `yarn build` - Start the application in production mode
- `yarn test` - Run tests using [tape](https://github.com/ljharb/tape)

### How to Run

#### Using Docker (Recommended)

The easiest way to run this project is using Docker, which ensures it works in any environment:

1. Build the Docker image:
```bash
docker build -t cash-machine .
```

2. Run the container:
```bash
docker run -p 1337:1337 cash-machine
```

Or run in detached mode (background):
```bash
docker run -d -p 1337:1337 --name cash-machine cash-machine
```

3. To stop the container:
```bash
# If running in foreground, press Ctrl+C

# If running in detached mode:
docker stop cash-machine
docker rm cash-machine
```

The application will be available at `http://localhost:1337`

#### Using Node.js Directly

If you prefer to run without Docker:

1. Install dependencies:
```bash
yarn install
```

2. Start the application:
```bash
yarn build
```

Or for development with auto-reload:
```bash
yarn start
```

3. To stop the application, press `Ctrl+C`

#### Testing the API

Once running, you can test the cash machine by making GET requests:

```bash
# Withdraw $30
curl http://localhost:1337/30

# Withdraw $80
curl http://localhost:1337/80

# Invalid amount (will return error)
curl http://localhost:1337/125
```
