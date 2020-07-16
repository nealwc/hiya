const router = require('express').Router();
const {
    getAllItems,
    createItem
} = require('../../controllers/item-controller');

// router.route('/')

router.route('/').post(createItem);

module.exports = router;