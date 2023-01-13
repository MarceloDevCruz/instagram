# UnsplashGram

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/MarceloDevCruz/instagram/blob/main/LICENCE)

# Sobre o projeto

Unsplashgram é uma rede social feita em NodeJs e ReactJs, e com o banco de dados MongoDb, foi projetado pensando em fullstack, usando no banco de dados mongoDb com uma instância em cloud, o MongoDb Atlas para armazenar posts e fotos dos usuários, ele tem as funcionalidades de comentários, likes, postar novas fotos e fazer update do usuário, além de login e registro.

## Backend

Foi criada uma api para o unsplashgram em NodeJs com express onde aprendi todos os verbos http GET POST PUT e DELETE colocando em prática ao longo do projeto, como por exemplo métodos de atualização de um usuário, com o PUT, método de retornar todos os post da página home, com o GET, deletar um post com o DELETE, e também enviar um novo post com o verbo POST, para a estrutura de páginas foi usado o MVC, onde o model foi controlado com a ORM mongoose, onde faz verificações nos dados antes de mandar para o banco de dados, é uma ótima alternativa para ter um melhor controle em banco de dados não relacionais, para o controller foram feitas as regras de negócio do projeto, basicamente foi tratado como os dados seria tratados e como iriam proceder, e também por último o view, que foi aplicado separado, que é a própria arquitetura front-end...

Além das pastas dos models e controllers, foram criados middlewares, para verificação de dados e validações de informações repassadas do usuário para o sistema, também uma pasta apenas para o tratamento e gerenciamento de rotas. Foi construido um sistema de login cadastro e autenticação de usuários, preocupado com a segurança do sistema utilizei a depedência bcryptjs, no qual cuida da segurança de senha dos usuários, criando um hash onde ele gerência as senhas para o sistema, assim, fazendo que nunca seja exposto senhas dos usuários em um possível ataque no banco de dados, foi usado também o jsonwebtoken, que é uma estrutura protegida com criptografia, pelo qual dados passam pelo mesmo fazendo assim que o sistema seja capaz de identificar a autenticidade de um usuário pelo token que é salva no próprio localstorage do navegador do usuário.

Para realizar esse projeto foi usado as seguintes tecnologias: node, express, MVC, bcryptjs, jsonwebtoken, .env, mongoose, multer, nodemon e Postman para teste de rotas.

## Frontend

Frontend criado para a api unsplashgram, com a tecnologia ReactJs para componentização, router-dom, para criar uma página SPA, junto com sass para pré-processar o css, , nesse projeto eu faço o consumo da API que criei, uma rede social com design responsivo e prototipado com o figma, inicialmente foi criada páginas para registro, login, home, edição de usuário, post individual, e criação de post.

Foi usado Redux para gerêncimento de dados e eventos globais na aplicação, com o auxilio do redux-devtools, foi usado padrão de páginas service/slice para melhorar a padronização e facilitação do código na hora de implementação do redux e para adição futuras de features, além disso também foi usado custom hooks para autorização do usuário no sistema, e também na busca de post com query.

Para realizar esse projeto foi usado as seguintes tecnologias: ReactJs, react-icons, react-redux, vite, sass, postcss, figma.

## Design e responsividade

Alguns exemplos de telas e suas respectivas responsividades...

### Login

#### Desktop
<div> 
  <img src="https://github.com/MarceloDevCruz/instagram/blob/main/frontend/src/assets/img/login%20bg.png" width="100%"  />
</div>

#### Tablet
<div> 
  <img src="https://github.com/MarceloDevCruz/instagram/blob/main/frontend/src/assets/img/login%20md.png" width="40%" height="40%"  />
</div>

#### Phone
<div> 
  <img src="https://github.com/MarceloDevCruz/instagram/blob/main/frontend/src/assets/img/login%20sm.png" width="20%" height="20%"  />
</div>

### Criar post

#### Desktop
<div> 
  <img src="https://github.com/MarceloDevCruz/instagram/blob/main/frontend/src/assets/img/create%20post%20bg.png" width="100%" height="50%"  />
</div>

#### Tablet
<div> 
  <img src="https://github.com/MarceloDevCruz/instagram/blob/main/frontend/src/assets/img/create%20post%20md.png" width="30%" height="30%"  />
</div>

#### Phone
<div> 
  <img src="https://github.com/MarceloDevCruz/instagram/blob/main/frontend/src/assets/img/create%20post%20sm.png" width="15%" height="15%"  />
</div>


# Tecnologias utilizadas

- html
- css
- Figma
- sass
- JavaScript
- NodeJs
- Postman
- MongoDb
- MongoDb Atlas
- ReactJs

## Depêndencias utilizadas

- node-sass
- npm-run-all
- postcss-cli
- prettier
- vite
- autoprefixer
- concat
- eslint

# Como executar o projeto

Essencialmente, o projeto é para ser executado em algum domínio, porém por limitações de conta no MongoDb Atlas imagens do projeto
ficam salvas por tempo limitadissímo, contudo para melhor experiência pode ser execultado localmente com alguns passos.

## Pré-requisitos

npm / yarn
MongoDb Atlas
VSCode

```bash
# clonar repositório
git clone https://github.com/MarceloDevCruz/instagram

# entrar na pasta backend
cd instagram/backend

# instalar dependências do backend
npm install

# entrar na pasta frontend
cd instagram/frontend

# instalar dependências do frontend
npm install

# modificar arquivo config.js do frontend
cd instagram/frontend/src/utils/
nano config.js

# alterando const api e uploads
export const api = "http://localhost:5000/api";
export const uploads = "http://localhost:5000/uploads";

# Crie uma nova collection no mongoDB e vincule no backend
# após entre na pasta do backend
cd instagram/backend/src/config
nano db.js

# altere a const de conexão do meu banco de dados para a sua collection
const dbConn = await mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@cluster0.8asnzq2.mongodb.net/?retryWrites=true&w=majority`
);

# no arquivo app.js no backend altere a porta que será executado o backend no localhost para 5000
cd instagram/backend/src
nano app.js

app.listen(5000, () => {
});

# na pasta backend abra o terminal e rode o comando
npm run server

# na pasta frontend abra o terminal e rode o comando
npm run dev

# acessar porta 3000 do localhost por algum navegador
locahost:3000
```

# Deploys da aplicação

## deploy backend

https://unplashgram-api.onrender.com/

## deploy frontend

https://unsplashgram.netlify.app/

# Autor

Marcelo Ferreira Cruz

## LinkedIn

https://www.linkedin.com/in/marcelo-ferreira-cruz/
