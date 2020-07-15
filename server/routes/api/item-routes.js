const router = require('express').Router();
const {
    getAllItems,
    createItem
} = require('../../controllers/item-controller');
const { model } = require('mongoose');

router.route('/')

router.route('/post').post(createItem);

module.exports = router;
