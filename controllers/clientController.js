const data = require("../data.json");

exports.getAllClients = async (req, res) => {
  try {
    const clients = data;
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
