// Configurando o .env, melhora a segurança e não expõem senhas e outros
// conteudos que os usuários não precisam ter acesso
require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

//Configurando o JSON e a form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// Resolvendo CORS
app.use(cors(corsOptions));

// Diretório de upload
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Conexão com o banco de dados
require("./config/db.js");

// testando rota
app.get("/", (req, res) => {
  res.send("API Working!");
});

// Rotas
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
  console.log(`localhost:${port}`);
});
