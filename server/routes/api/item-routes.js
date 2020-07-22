const router = require('express').Router();
const {
    getAllItems,
    saveItem
} = require('../../controllers/item-controller');

// router.route('/')

const { authMiddleware } = require('../../utils/auth');


router.route('/').get(getAllItems).post(authMiddleware, saveItem);

module.exports = router;