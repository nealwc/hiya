const router = require('express').Router();
const {
    getAllItems,
    saveItem
} = require('../../controllers/item-controller');

// router.route('/')

router.route('/').get(getAllItems).post(saveItem);

module.exports = router;