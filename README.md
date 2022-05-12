# React Cosmos DB Refreshed

A refreshed example of running React and Cosmos DB together. Uses Express and React in the same project based on the Express React Starter Kit. Read the article: [Introducing Express React Starter](https://medium.com/burke-knows-words/introducing-express-react-starter-b6d299206a3a)

## Prerequisites

- [create-react-app](https://github.com/facebookincubator/create-react-app)

## Installing

```bash
git clone 'this-repo-url' app-name
cd app-name
npm install
```

## Running The App

The template can be run in development, or in production. For development, use the following workflow.

### Start the Express Server and React Frontend

```bash
npm start
```

![Imgur](http://i.imgur.com/m6wz8eQ.png)

### What Is Happening Here?

Create React App and the Express server are running on different processes. This is so that React can still use in memory Webpack to do hot reloads really fast.

All AJAX/fetch requests to `/api` are sent back to the Express server which is serving all `/api` routes from the `routes/index.js` file. This is done via a proxy setup in the `package.json` file.

## Building For Production

In production, you want Express to serve up your app.

### Build React App

```bash
npm build
```

Now simply visit the Express app at 'http://localhost:3001' and you will see your app served from the 'build' folder. That's all there is to it!
