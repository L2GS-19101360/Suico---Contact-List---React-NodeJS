const express = require('express');
const router = express.Router();
const contactController = require('../controller/contacts.controller');

router.get('/', contactController.findAll);
router.post('/', contactController.create);
router.delete('/:id', contactController.delete);

module.exports = router;