### CRUD em JavaScript (MVC)
Este é um projeto simples de um CRUD (Create, Read, Update, Delete) desenvolvido em JavaScript, com foco no padrão de arquitetura MVC (Model-View-Controller). O objetivo deste projeto é demonstrar a aplicação de boas práticas de organização de código utilizando o padrão MVC.

Tecnologias Utilizadas
JavaScript: A linguagem principal utilizada para a implementação do CRUD.
HTML/CSS: Para a construção da interface básica.
JSON: Para manipulação de dados (simulação de um banco de dados).
MVC: Padrão de arquitetura para separar as responsabilidades da aplicação.


### Estrutura do Projeto

O projeto está estruturado da seguinte forma:

/assets/: Arquivos estáticos (CSS, imagens).
/models/: Contém os dados e lógica de manipulação (como adicionar, editar e remover entradas).
/controllers/: Contém a lógica de controle que conecta o modelo e a visualização, realizando as operações de CRUD.
/views/: Representa a interface de usuário que interage com o usuário.
/scripts/: Responsável pela interação entre o modelo, o controlador e a visão.

### Descrição das Pastas e Arquivos
/models: Contém os dados e lógica de manipulação.
/views: Interface de usuário.
/controllers: Lógica de controle das operações.
/scripts: Responsável pela interação entre os componentes.

### Funcionalidades

Create: Adicionar um novo item.
Read: Exibir uma lista de itens.
Update: Editar informações de um item existente.
Delete: Remover um item da lista.

### Exemplo de Fluxo de Dados

O usuário adiciona um item através da interface (View).
O controlador (Controller) recebe a solicitação e faz a modificação no modelo (Model).
O modelo atualiza os dados e a visão é atualizada automaticamente para refletir as mudanças.
