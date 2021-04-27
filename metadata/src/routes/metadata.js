const { Router } = require("express");

const controller = require("../controllers/metadata");

const router = Router();

router.get("/:tableName", async (req, res, next) => {
  const tableName = req.params.tableName;
  const metadata = await controller.getMetadata(tableName);

  res.status(200).send(metadata);
});

module.exports = router;
