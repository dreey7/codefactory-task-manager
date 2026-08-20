# CodeFactory Task Manager

## Descrição

O CodeFactory Task Manager é um sistema web simples desenvolvido para auxiliar no acompanhamento de tarefas de uma equipe.

O projeto foi desenvolvido como atividade prática de aplicação da Cultura DevOps, utilizando Git, GitHub, Docker e Integração Contínua.

## Objetivo

O objetivo do sistema é permitir que os usuários cadastrem, visualizem, concluam e excluam tarefas de maneira simples.

## Funcionalidades

- Adicionar tarefas;
- Listar tarefas;
- Marcar tarefas como concluídas;
- Desfazer a conclusão de tarefas;
- Excluir tarefas;
- Armazenar tarefas no navegador.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- Git;
- GitHub;
- Docker;
- Nginx;
- GitHub Actions.

## Estrutura do projeto

```text
codefactory-task-manager/
├── .github/
│   └── workflows/
│       └── ci.yml
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── .dockerignore
├── .gitignore
├── LICENSE
└── README.md
```

## Execução local

O projeto pode ser executado diretamente abrindo o arquivo `index.html` em um navegador.

Também é possível utilizar um servidor web local.

## Execução com Docker

Para criar a imagem:

```bash
docker build -t codefactory-task-manager .
```

Para executar o container:

```bash
docker run -d -p 8080:80 --name codefactory-task-manager codefactory-task-manager
```

Depois, acessar: <http://localhost:8080>

## Git e branches

O projeto utiliza Git para controle de versão e GitHub como repositório remoto.

Branches utilizadas:

- `main`: versão estável;
- `desenvolvimento`: integração das alterações;
- `feature/tarefas`: desenvolvimento da funcionalidade de tarefas.

## Integração Contínua

O projeto utiliza GitHub Actions para executar verificações automáticas sempre que alterações são enviadas ao repositório.

A pipeline verifica:

- existência dos arquivos principais;
- estrutura básica do HTML;
- sintaxe do JavaScript.

## Docker

O Docker foi utilizado para padronizar o ambiente de execução da aplicação.

A aplicação é executada dentro de um container utilizando Nginx como servidor web.

## Licença

Este projeto está disponível sob a licença MIT.

## Projeto acadêmico

Projeto desenvolvido para demonstrar conceitos de Cultura DevOps, controle de versão, colaboração, containerização e Integração Contínua.
