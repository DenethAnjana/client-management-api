const express = require('express');
const router = express();
const ClientController = require('../controllers/clientController');
const checkId = require('../middleware/checkId');

router.get("/", ClientController.show_all);

router.post('/', checkId, ClientController.add_new);

router.get("/:clientId", ClientController.show_by_id);

module.exports = router;
