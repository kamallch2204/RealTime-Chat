const express = require("express");

const router = express.Router();
const { createMessage, getMessages, deleteMessage } = require("../controllers/MessageControllers");

router.get("/", getMessages);
router.post("/", createMessage);
router.delete("/", deleteMessage);
module.exports = router;