const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

module.exports = router;