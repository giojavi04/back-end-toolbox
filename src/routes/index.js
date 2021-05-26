const express = require('express');
const { query, validationResult } = require('express-validator');

const router = express.Router();

const textService = require('../services/textService')

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.send({ message: 'Hello world' });
});

router.get('/iecho',
  query('text')
    .exists()
    .withMessage('Debe existir un query param con texto.')
    .not().isEmpty().trim().escape()
    .withMessage('No puede enviar el campo vacio.')
    .not()
    .isInt()
    .withMessage('Solamente letras son permitidas.'),
  (req, res, next) => {
    var err = validationResult(req);
    if (!err.isEmpty()) {
      res.send({ error: err.mapped().text.msg })
    } else {
      res.send(textService(req.query.text))
    }
  })

module.exports = router;
