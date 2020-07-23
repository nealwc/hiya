const router = require('express').Router();
const {
    getAllItems,
    saveItem,
    populateItems
} = require('../../controllers/item-controller');

// router.route('/')

const { authMiddleware } = require('../../utils/auth');


// router.route('/').get(getAllItems).post(authMiddleware, saveItem);

router.route('/').get(populateItems).post(authMiddleware, saveItem);

module.exports = router;