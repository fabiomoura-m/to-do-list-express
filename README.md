# Resumo do Projeto

Este é um projeto de aplicativo para gerenciar listas de tarefas, desenvolvido usando Node.js e MongoDB. O aplicativo permite criar, visualizar, atualizar e excluir listas de tarefas, além de adicionar e remover tarefas das listas.

# Configurações

Para usar o projeto, você precisa ter o Node.js e o MongoDB instalados no seu computador. Após clonar o repositório, execute o seguinte comando para instalar as dependências:

        npm install

Em seguida, execute o seguinte comando para iniciar o aplicativo:

        npm run dev

O aplicativo será iniciado na porta 3000.

# Estrutura do projeto

O projeto está dividido em quatro arquivos principais:

    app.js: arquivo principal da aplicação, onde os middleware e rotas da aplicação são definidos.
    index.js: arquivo com as rotas principais da aplicação, que não dependem de nenhuma lista de tarefas específica.
    checklist.js: arquivo com rotas para gerenciar listas de tarefas.
    task.js: arquivo com rotas para gerenciar tarefas.

# Rotas

O aplicativo possui as seguintes rotas:

    GET /: application's rota principal da aplicação, que exibe uma página com informações sobre o aplicativo.
    GET /checklists: rota que exibe a lista de todas as listas de verificação.
    GET /checklists/new: rota que exibe o formulário para criar uma nova lista de verificação.
    POST /checklisst: rota que cria uma nova lista de verificação.
    GET /checklists/:id: rota que exibe uma lista de tarefas específica, com suas respectivas tarefas.
    GET /checklists/:id/edit: Rota que exibe o formulário para editar uma lista de verificação.
    PUT /checklists/:id: rota que atualiza uma lista de verificação.
    DELETE /checklists/:id: rota que exclui uma lista de verificação.
    GET /checklists/:id/tasks/new: rota que exibe o formulário para adicionar uma nova tarefa a uma lista de tarefas.
    POST /checklists/:id/tasks: rota que cria uma nova tarefa em uma lista de tarefas.
    DELETE /tasks/:id: rota que exclui uma tarefa de uma lista de tarefas.

# Banco de Dados

O aplicativo usa o MongoDB como banco de dados. A conexão com o banco de dados é feita através do arquivo config/database.js. O esquema do banco de dados é definido nos arquivos models/checklist.js e models/task.js.

# middleware

O aplicativo utiliza os seguintes middlewares:

    express.json(): middleware para analisar o corpo das requisições no formato JSON.
    express.urlencoded({extended:true}): middleware para analisar os corpos das requisições no formato codificado em URL.
    methodOverride('_method', {methods:['POST', 'GET']}): middleware para usar métodos HTTP como PUT e DELETE.
    express.static(path.join(__dirname,'public')): middleware para servir arquivos estáticos na pasta public.
    log: middleware para registrar as requisições.

# Autor

Desenvolvido por Fabio Moura nas aulas de NodeJs e MongoDb do OneBitCode.    
