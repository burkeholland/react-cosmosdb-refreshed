// Rename this file to config.js and udpate with your COSMOS DB information
// This file is NOT checked into source control

const config = {
  endpoint: "https://heroes-sql.documents.azure.com:443/",
  key: "ESwVd3GwJYndiiBvcg3sMhntwtw51UxVMKAja0nVfXzzfLimdRXGTdTVROt3kiM5ccIoMDYydjjh2bSRaaNJwQ==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] },
};

module.exports = config;
