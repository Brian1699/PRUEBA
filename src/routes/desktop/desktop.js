const { Router } = require("express");
const getUpdates = require("../../controllers/desktop/getUpdates.controller");
const createUser= require("../../controllers/Users/createUser.controller");

const router = Router();

router.get("/getUpdates", getUpdates)

router.post("/createUser", createUser)
module.exports = router;