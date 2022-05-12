const CosmosClient = require("@azure/cosmos").CosmosClient;
const { json } = require("body-parser");
const config = require("../config");
const dbContext = require("../data/databaseContext");

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

const tasksService = {
  async init() {
    // Make sure Tasks database is already setup. If not, create it.
    await dbContext.create(client, config.databaseId, config.containerId);
  },
  async create(newItem) {
    const { resource: createdItem } = await container.items.create(newItem);
    return createdItem;
  },
  async read() {
    console.log(`Querying container: Items`);

    // read all items in the Items container
    let iterator = await container.items.readAll();
    let { resources } = await iterator.fetchAll();

    return resources;
  },
  async update(id, updatedItem) {
    let itemToReplace = container.item(id, updatedItem.category);
    let { result } = await itemToReplace.replace(updatedItem);

    return result;
  },
  async delete(id, category) {
    // pass undefined as the second parameter to item()
    // if the collection doesn't have a partition key
    let { resource: deletedItem } = await container.item(id, category).delete();
  },
};

tasksService.init();

module.exports = tasksService;
