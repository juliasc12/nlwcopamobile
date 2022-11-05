<div align="center"> 
<img width="250" padding: 2rem src=https://uploaddeimagens.com.br/images/004/091/574/original/logo.png?1667599176><br>
<br><p align="center">🚀 <b> Aplicativo para gerênciamento de bolões pros jogos da Copa de 2022 </b>🚀 <br> 
<i font-size: 2px>desenvolvido durante a NLW - Rocketseat</i></p>

![](https://skills.thijs.gg/icons?i=react,ts,nodejs,nextjs&theme=dark)
</div>

## 
<div align="center"><h3>Layout da Aplicação WEB</h3></div>
<img src="https://uploaddeimagens.com.br/images/004/091/631/original/web.PNG?1667603645">

<div align="center" margin="2"><h3>Layout da Aplicação MOBILE</h3>
  <img  width="200" src="https://uploaddeimagens.com.br/images/004/091/713/full/WhatsApp_Image_2022-11-04_at_20.22.15.jpeg?1667608407">
  <img  width="200" src="https://uploaddeimagens.com.br/images/004/091/714/full/WhatsApp_Image_2022-11-04_at_20.22.15_%281%29.jpeg?1667608428">
  <img  width="200"  src="https://uploaddeimagens.com.br/images/004/091/715/full/WhatsApp_Image_2022-11-04_at_20.22.15_%282%29.jpeg?1667608450">
  <img  width="200" src="https://uploaddeimagens.com.br/images/004/091/717/original/WhatsApp_Image_2022-11-04_at_20.22.16.jpeg?1667608483">
</div>
<br><br>

## Tecnologias Utilizadas no Desenvolvimento
- <b>Backend</b>
  - SQLite, Fastify, Prisma, Axios, OAuth2 e Dotenv
- <b>Frontend</b>
  - React, Typescript, Nextjs e Tailwind CSS
- <b>Mobile</b>
  - ReactNative, Expo, SVG Transformer, React Navigation

<br><br>

## Instalação das dependências e execução. 
 Importante sempre deixar ligado o servidor pro funcionamento das aplicações web e mobile.
 
  - clonar repositório
    > git clone https://github.com/juliasc12/nlwcopamobile.git

  - cd mobile
    > npm i <br>
    > npx expo start

  - cd server | cd web
    > npm i <br>
    > npm run dev

<br>

## Rotas da API
Para um melhor entendimento foi gerado um Diagrama de Entidade e Relacionamento (server/prisma/erd.svg) e para o sucesso na requisição de algumas rotas é necessário informar o Bearer Token.

### 1. **Pools**

  - GET /pools/count
    - Quantidade de bolões cadastrados
  - GET /pools
    - Listagem de todos os bolões
  - GET /pools/:poolsId
    - Listagem de um bolão específico 
  - POST /pools -> { "title": " " } 
    - Criação de um bolão com o título enviado na requisição, retorna o código
  - POST /pools/join -> { "code": " " } 
    - Envia o código de um bolão específico na requisição e faz a solicitação de participação <br>

### 2. **Users**
  - GET /users/count 
    - Quantidade de usuários cadastrados <br>
    
### 3. **Game**
   - GET /pools/poolsId/Games 
      - Listagem de todos os jogos cadastrados em um bolão <br>

### 4. **Guess**
  - GET /guesses/count 
    - Quantidade de palpites cadastrados

  - POST /pools/poolsId/games/gamesId/guesses -> { "firstTeamPoints": X, "secondTeamPoints": Y }
    - Criação de um palpite em um determinado jogo em um determinado bolão <br>

### 5. **Auth SignIn | SignUp**
  - GET /me
    - Retorna dados do usuário como nome, avatar, inscrição e expiração de token

  - POST /users  -> { "acess_token": process.env.CLIENT_ID }
    - Loga o usuário e retorna o token JWT<br>
