const express = require('express');
const router = express.Router();

router.get('/dog', function (req, res) {
    res.status(200).send({ "grow": "guau guau" });
});

router.get('/cat', function (req, res) {
    res.status(200).send({ "grow": "miau" });
});

router.get('/bird', function (req, res) {
    res.status(200).send({ "grow": "pio pio" });
});

module.exports = router;