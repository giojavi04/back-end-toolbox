const express = require('express');

const router = express.Router();

const textService = require('../services/textService')

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.send({ message: 'Hello world' });
});

router.get('/iecho', (req, res, next) => {
  res.send(textService(req.query.text))
})

module.exports = router;
