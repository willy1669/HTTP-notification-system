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
npm run start:dev

#View the application
navigate to localhost:9000 to view the application
```

## Testing

## Technologies

### Backend

- [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express JS](http://express.com) A minimalist web framework
- [MongoDB](https://www.mongodb.com/) The database for modern applications.
- [MongooseORM](https://mongoosejs.com/) Elegant mongodb object modeling for node.js


#### Linter(s)

- [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
- [Prettier](https://prettier.io) Prettier is an opinionated code formatter with support for Javascript

#### Compiler

- [Babel](https://babeljs.io/) A JavaScript compiler for converting codes written in ES6 or JSX to ES5 that is supported by many browsers

## Authors

- **Chinonso Williams** 
