const express = require('express');
const router = express.Router();
const db = require('./queries');



/* GET api listing. */
router.get('/', db.getUsers);
router.get(`/`, db.getUserById);
router.p
module.exports = router;