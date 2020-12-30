import express from "express";
import Message from "../../../controllers/message";
const router = express.Router();
require("dotenv").config();

router.route("/message").get(Message.getAll);
router.route("/message").post(Message.create);
router.route("/message/:id").delete(Message.delete);
module.exports = router;
