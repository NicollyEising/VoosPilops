# Voos Pilops

## Descrição

Projeto composto por **backend** em Node.js/Express (TypeScript) e **frontend** em React (Vite + TypeScript).
O backend fornece endpoints para listar voos, obter detalhes por ID e retornar o saldo total.
O frontend exibe a lista de voos e uma página de detalhes.

---

## Requisitos

* Node.js
* npm ou yarn
* TypeScript

---

## Backend

### Decisões técnicas

* Utilização de **Node.js/Express** para simplicidade e facilidade de integração com TypeScript.
* Persistência em **JSON local** (`flightHistory.json`) para prototipagem rápida.
* Endpoints estruturados para suportar **paginação** e total de saldo acumulado.

### Instalação de dependências

```bash
npm install express cors
npm install --save-dev ts-node typescript
npm install --save-dev @types/express @types/cors
```

### Rodar a aplicação

```bash
npm run start
```

### Testes unitários

```bash
npm install --save-dev jest ts-jest @types/jest supertest @types/supertest
```

### Rodar testes

```bash
npx jest
```

### Endpoints disponíveis (porta padrão 3030)

* **GET /flights** – Lista voos com suporte a paginação.
* **GET /flights/:id** – Retorna detalhes de um voo específico.
* **GET /totalBalance** – Retorna o saldo total acumulado de todos os voos.

---

## Frontend (Vite + React)

### Decisões técnicas

* Utilização de **Vite** para desenvolvimento rápido.
* Componentização em **React** com TypeScript para maior previsibilidade.
* Paginação fixa e tabela responsiva para exibição de voos.
* Página de detalhes apresenta recompensas, XP e bônus de missão de forma clara.

### Instalação

```bash
cd vite-project
npm install
```

### Rodar servidor de desenvolvimento

```bash
npm run dev
```

---

## Melhorias com mais tempo

* **Hospedar backend no Vercel** para que o frontend acesse a API sem depender de `localhost`.
* Adicionar **armazenamento em banco de dados real** (ex: PostgreSQL ou MongoDB).
* Implementar **tratamento de erros mais robusto** no frontend, incluindo notificações visuais.
