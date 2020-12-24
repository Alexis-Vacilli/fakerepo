import Messages from "../models/message";

class Message {
  static async create(req, res, next) {
    try {
      const message = await Messages.create(req.body);
      return res.status(200).json({ success: true, data: message });
    } catch (error) {
      res.status(401).json({ message: error });
    }
  }

  static async getAll(req, res, next) {
    try {
      const message = await Messages.find();
      return res
        .status(200)
        .json({ success: true, count: message.length, data: message });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }
}

export default Message;
