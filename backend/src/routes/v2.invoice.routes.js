const express = require('express');

const router = express.Router();

const {
  createInvoice,
} = require('../controllers/invoice.controller');

router.post('/create', createInvoice);

module.exports = router;

