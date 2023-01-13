const mongoose = require("mongoose");

// importando os .env
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Conectando com o banco de dados do mongoDb
const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.8asnzq2.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conectou no banco!");
    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
