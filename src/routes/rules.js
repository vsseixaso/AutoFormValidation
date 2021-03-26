const { Router } = require('express');

const controller = require('../controllers/rules')

const router = Router();

router.get('/:tableName', async (req, res, next) => {
    const tableName = req.params.tableName;
    const rules = await controller.getRules(tableName);

    res.status(200).send(rules);
});

module.exports = router;
