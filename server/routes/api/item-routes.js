const router = require('express').Router();
const {
    getAllItems,
    createItem
} = require('../../controllers/item-controller');

// router.route('/')

router.route('/').get(getAllItems).post(createItem);

module.exports = router;