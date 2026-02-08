const serverlessExpress = require('@vendia/serverless-express');
const app = require('./src/app');

let cachedHandler;

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!cachedHandler) {
    cachedHandler = serverlessExpress({ app });
  }

  return cachedHandler(event, context);
};
