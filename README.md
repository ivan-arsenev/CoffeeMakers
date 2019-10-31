# This is simple social media app that implements MERN stack approach

In this demo, I would like to reproduce kind of social interaction app, where you could register or edit users.
Alse it's provides post new messages to news board. Edit or delete these messages.
Before use, you need to create default.js in config folder.
After, put there mongoDB connection string and jwtSecret (token)

## Some of useful commands that I used in through development in backend 🌎

    npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
    npm i -D nodemon concurrently
    npm run server

## Some of useful commands that I used in through development in frontend 🌠

    npx create-react-app client
    npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment uuid

## Banch of usefull links to docs

    https://express-validator.github.io/docs/
    https://github.com/auth0/node-jsonwebtoken
    https://jwt.io/

## Banch of handful things to know🍔

    It's really anoing to write always axios.get('http://localhost:5000/api/profiles')
    so set proxy to axios in package.json  "proxy" : "http://localhost:5000"
