# React Cosmos DB Refreshed

A refreshed example of running React and Cosmos DB together. Uses Express and React in the same project based on the Express React Starter Kit. Read the article: [Introducing Express React Starter](https://burkeholland.github.io/posts/express-react-starter-refresh/)

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
npm run server
```

![Imgur](http://i.imgur.com/m6wz8eQ.png)

### What Is Happening Here?

Create React App and the Express server are running on different processes. This is so that React can still use in memory Webpack to do hot reloads really fast.

All AJAX/fetch requests to `/api` are sent back to the Express server which is serving all `/api` routes from the `routes/index.js` file. This is done via a proxy setup in the `package.json` file.

## Building For Production

In production, you want Express to serve up your app.

```bash
npm build
```

This will build the entire app into the "build" folder. This is the folder that you would deploy to your server. The entrypoint is `server.js`. You can test the production build locally by running...

```bash
node build/server.js
```

Now simply visit the Express app at 'http://localhost:3000' and you will see your app served from the 'build' folder. That's all there is to it!
