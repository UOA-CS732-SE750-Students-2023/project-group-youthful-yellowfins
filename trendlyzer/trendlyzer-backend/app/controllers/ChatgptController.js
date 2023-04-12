const chatgptService = require('../services/ChatgptService');

exports.sendMessage = async (req, res) => {
  // console.log(req.body);
  const message = req.body.message;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await chatgptService.generateResponse(message);
    res.status(200).json({ response });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: error.message });
  }
};