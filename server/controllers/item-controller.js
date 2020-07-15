const { Item } = require('../models');

module.exports = {
    // get all items
    async getAllItems(req, res) {
        const items = await Item.find();
        return res.json(items);
      },
    // create an item
    async createItem({ body }, res) {
        const item = await Item.create(body);
        res.json(item);
    }
}