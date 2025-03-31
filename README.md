# Sistema de Tickets de Suporte

Sistema simples para gerenciamento de tickets de suporte técnico, desenvolvido com Node.js puro.

- Documentação: https://efficient-sloth-d85.notion.site/API-de-ticket-de-suporte-25654d26e5704936a5da1b3083f03c27

## 🚀 Tecnologias

- Node.js
- JavaScript
- Sistema de rotas customizado
- Sistema de banco de dados em arquivo JSON

## 📋 Funcionalidades

- Criação de tickets de suporte
- Listagem de tickets
- Atualização de tickets
- Fechamento de tickets
- Exclusão de tickets

## 🛠️ Como usar

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/support-ticket.git
```

2. Instale as dependências

```bash
npm install
```

3. Execute o projeto

```bash
npm run dev
```

## 📝 Endpoints

### Listar Tickets

```http
GET /tickets
```

### Criar Ticket

```http
POST /tickets
Content-Type: application/json

{
  "equipment": "Nome do equipamento",
  "description": "Descrição do problema",
  "user_name": "Nome do usuário"
}
```

### Atualizar Ticket

```http
PUT /tickets/:id
Content-Type: application/json

{
  "equipment": "Novo nome do equipamento",
  "description": "Nova descrição",
  "user_name": "Novo nome do usuário"
}
```

### Fechar Ticket

```http
PATCH /tickets/:id/status
```

### Deletar Ticket

```http
DELETE /tickets/:id
```

## 📊 Estrutura do Ticket

```json
{
  "id": "uuid-gerado-automaticamente",
  "equipment": "Nome do equipamento",
  "description": "Descrição do problema",
  "user_name": "Nome do usuário",
  "status": "OPEN" | "CLOSED"
}
```

## 🔍 Filtros

Os tickets podem ser filtrados por:

- equipment
- description
- user_name

Exemplo:

```http
GET /tickets?equipment=Notebook&user_name=João
```

## 📦 Estrutura do Projeto

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
