# HTTP-notification-system
A server (or set of servers) will keep track of topics -> subscribers where a topic is a string and a subscriber is an HTTP endpoint. When a message is published on a topic, it should be forwarded to all subscriber endpoints

## Requirements and Installation

**Via Cloning The Repository**

```bash
# Clone the app
git clone https://github.com/willy1669/HTTP-notification-system.git

# Switch to directory
cd HTTP-notification-system

# Install Package dependencies
yarn install

# create a .env file and make a clone of the .example.env
touch .env

#Start the application
yarn start

#View the application
navigate to localhost:9000 to start the application
```

### API
- Thought to use api versioning
* http://localhost:8000/api/v1/subscribe/:topic
* http://localhost:8000/api/v1/publish/:topic


## Testing

## Technologies

### Backend

- [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express JS](http://express.com) A minimalist web framework
- [MongoDB](https://www.mongodb.com/) The database for modern applications
- [MongooseORM](https://mongoosejs.com/) Elegant mongodb object modeling for node.js
- [Pino](https://www.npmjs.com/package/pino) Production logging and benchmarking for node.js
- [Helmet](https://helmetjs.github.io/) Express.js security with HTTP headers
- [Snyk](https://snyk.io/) Security Across the Cloud Native Application Stack and dependency management

#### Linter

- [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
- [Prettier](https://prettier.io) Prettier is an opinionated code formatter with support for Javascript

#### Compiler

- [Babel](https://babeljs.io/) A JavaScript compiler for converting codes written in ES6 or JSX to ES5 that is supported by many browsers

## Authors

- **Chinonso Williams** 
