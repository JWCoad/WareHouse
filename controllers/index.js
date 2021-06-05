const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
// const itemRoutes = require("./itemRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/api", itemRoutes);

module.exports = router;
