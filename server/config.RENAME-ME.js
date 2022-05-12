// Rename this file to config.js and udpate with your COSMOS DB information
// This file is NOT checked into source control

const config = {
  endpoint: "<your-cosmosdb-uri",
  key: "<your-cosmos-db-key>",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] },
};

module.exports = config;
