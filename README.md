# Try Out 01 - Refactory
### Generator Yield
To run this program, go to yield directory and run `node file.js [path] [file_extension]`. Example `node Yield.js ~/Documents js`

### GraphQL
![graphql](https://github.com/sutani/tryout-01/blob/master/Screenshot%20from%202017-04-05%2011:48:57.png)
### How to run
**Server** 
* Go to graphql directory
* If you just clone this repository, you have to install all dependencies using `yarn install` or `npm install`
* Run the server by executing `node server.js` 
* Example
* ![run node js](https://github.com/sutani/tryout-01/blob/master/Screenshot%20from%202017-04-05%2011:25:32.png)

**React Native Client**
* Go to react native graph ql directory using `cd graphql/graphql_client`
* Build react native application using `react-native run-android`

**Data Schema**
```
// import express and GraphQL
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema using GraphQL
var schema = buildSchema(`
  type Query {
    quotes: String
  }
`); // String! symbol mean is String cannot be null

// The root provide a resolver function for each of API endpoint
var root = {
  quotes: () => {
    return 'Kita tidak akan pernah tahu bagimana menyemba-Nya sebelum kita mulai dengan bagaimana mencintai-Nya';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false,
}));

app.listen(4000);
console.log('Runing a graphql API Server in localhost:4000/graphql');
```
### WebSocket
![websocket](https://github.com/sutani/tryout-01/blob/master/Screenshot%20from%202017-04-03%2015:26:37.png)
### How to run
***Server***
* Go to websocket directory
* If you just clone this repository, you have to install all dependencies using `yarn install` or `npm install`
* Run the server by executing `node server.js`

***React Native Client***
* Go to react native websocket directory using `cd websocket/websocketReact`
* Build react native application using `react-native run-android`

### License
MIT

### Footnote
This repository is created by Sutani Ghifari. Please contact me by email: sutanighifari@gmail.com for further information
