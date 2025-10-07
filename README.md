# Voos Pilops

## Descrição

Projeto composto por **backend** em Node.js/Express (TypeScript) e **frontend** em React (Vite + TypeScript).
O backend fornece endpoints para listar voos, obter detalhes por ID e retornar o saldo total.
O frontend exibe a lista de voos e uma página de detalhes.

---

## Requisitos

* Node.js (v16+ recomendado)
* npm ou yarn
* TypeScript

---

## Backend

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

---

### Endpoints disponíveis (porta padrão 3030)

* **GET /flights**
     
* **GET /flights/:id**

* **GET /totalBalance**



## Frontend (Vite)

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

