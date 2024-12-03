Liquid - Rede Social de Drinks
Sobre o Projeto
Liquid é uma rede social inovadora para os amantes de drinks. Conectamos pessoas apaixonadas por coquetéis, permitindo que compartilhem criações, descubram receitas e interajam em uma comunidade vibrante. Além disso, o projeto integra o BarBot, um assistente inteligente que transforma ingredientes disponíveis na sua casa em sugestões personalizadas de drinks, enriquecidas com receitas e histórias de coquetéis icônicos.

O Liquid combina interação social com a arte da mixologia, criando uma experiência imersiva e divertida para todos os níveis de entusiastas, desde iniciantes até bartenders experientes.

Funcionalidades Principais

1. Cadastro de Usuário
Criação de contas com validação de:
Nome, email e senha.
Sistema seguro de autenticação para garantir privacidade e segurança.
2. Feed de Posts
Exploração de Conteúdo:
Veja e interaja com os posts de outros usuários no feed.
Curta, comente e compartilhe criações inspiradoras.
Gerenciamento de Postagens:
Poste fotos de seus drinks, com descrição e ingredientes utilizados.
Edite ou exclua postagens de sua autoria.
Comentários e Engajamento:
Responda a comentários de forma interativa e envolvente.
3. Perfil de Usuário
Personalize seu perfil com:
Foto de exibição.
Biografia curta para apresentar sua paixão por drinks.
Informações básicas como nome de usuário.
Acompanhe o número de seguidores e quem você segue.
4. BarBot - Assistente de Coquetéis
Inteligência Artificial integrada:
Usando a API do ChatGPT, o BarBot ajuda a transformar os ingredientes que você tem em casa em drinks incríveis.
Receitas detalhadas e histórias dos coquetéis sugeridos.
Funcionalidades futuras planejadas:
Sugestões personalizadas com base no perfil do usuário (ex.: preferências por drinks doces ou cítricos).
Tecnologias Utilizadas
Frontend
React: Para construir uma interface de usuário interativa, responsiva e moderna.
Backend
Spring Boot e Java: Gerenciamento de APIs REST para autenticação, CRUD de postagens e integração com o banco de dados.
Node.js: Para a integração com a API do ChatGPT (BarBot).
Banco de Dados
PostgreSQL: Gerenciamento robusto e confiável de dados relacionais.
Como Executar o Projeto
Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:

Node.js e npm (ou yarn) para o frontend.
Java 17+ e Maven para o backend.
PostgreSQL para o banco de dados.
Passos para Execução
Clone o Repositório:
bash
Copiar código
git clone https://github.com/seuusuario/liquid.git
cd liquid
Configuração do Backend:
Configure o arquivo application.properties com as credenciais do seu banco de dados PostgreSQL.
Inicie o servidor Spring Boot:
bash
Copiar código
cd backend
mvn spring-boot:run
Configuração do Frontend:
Instale as dependências do React:
bash
Copiar código
cd frontend
npm install
Inicie o servidor de desenvolvimento:
bash
Copiar código
npm start
Configuração da Integração do BarBot:
Configure as chaves de API para o ChatGPT em um arquivo .env no backend.
Acesse a aplicação em http://localhost:3000.
Estrutura do Projeto
Frontend:

Estrutura modular com componentes React reutilizáveis.
Integração de Axios para consumo de APIs.
Roteamento com React Router.
Backend:

Arquitetura RESTful.
Configuração de segurança para autenticação de usuários.
Banco de Dados:

Modelagem de tabelas para usuários, postagens, comentários e interações.
