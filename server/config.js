// @ts-check
const config = {
  endpoint: "<your-cosmos-uri>",
  key: "<your-cosmos-key>",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] },
};

module.exports = config;
