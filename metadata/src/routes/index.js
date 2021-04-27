const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "AutoFormValidation",
    version: "1.0.0",
  });
});

module.exports = router;
