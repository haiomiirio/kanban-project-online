# 🎯 Project Manager – Kanban Board

> Aplicação web de gerenciamento de tarefas no estilo Kanban, desenvolvida com React e TypeScript, focada em organização, colaboração e boa experiência do usuário.

**🔗 [Acesse o Projeto Online](https://haiomiirio.github.io/kanban-project-online/kanban-react/)**

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://haiomiirio.github.io/kanban-project-online/kanban-react/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)

## 📖 Sobre o Projeto

Este projeto foi desenvolvido durante meu período de estágio na **Compass UOL**, como parte de um desafio técnico, aplicando práticas modernas de desenvolvimento frontend.

O Project Manager é uma aplicação de Kanban pensada para facilitar o acompanhamento de tarefas e o trabalho em equipe. O foco foi criar uma solução clara, funcional e responsiva, usando tecnologias atuais do ecossistema React.

Ao longo do desenvolvimento, trabalhei conceitos importantes como autenticação, gerenciamento de estado, organização de componentes e boas práticas de UI.

## :camera: Preview

![kanban Preview](src/assets/readMe_preview/kanban.gif)

## ✨ Funcionalidades

### 🗂️ Gerenciamento de Tarefas
- Criação, edição e exclusão de tarefas
- Organização por colunas (To Do, In Progress, Done)
- Drag and drop para movimentação intuitiva
- Definição de prioridade e status
- Atribuição de tarefas a usuários

### 👤 Usuários e Autenticação
- Login seguro com Clerk (Email/Senha e OAuth)
- Rotas protegidas
- Gerenciamento de sessão

### 🎨 Experiência do Usuário
- Layout totalmente responsivo
- Interface moderna com Tailwind CSS
- Suporte a modo escuro
- Navegação simples e fluida

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca UI
- **TypeScript** - JavaScript tipado
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Redux Toolkit** - Gerenciamento de estado
- **React Router** - Roteamento
- **React Beautiful DnD** - Drag and drop

### Backend / Auth
- **Clerk** - Autenticação e gerenciamento de usuários
- **JSON Server** - API mock
- **Axios** - Cliente HTTP

### Ferramentas
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **GitHub Actions** - CI/CD

## 🚀 Execução do Projeto

### Pré-requisitos
- Node.js 20+
- npm
- Conta no Clerk

### Passos básicos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/kanban-project-online.git
   cd kanban-project-online
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env.local` na raiz do projeto:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   CLERK_SECRET_KEY=your_clerk_secret_key_here
   ```

4. **Inicie o JSON Server (Terminal 1)**
   ```bash
   npx json-server db.json --port 3000
   ```

5. **Inicie o servidor de desenvolvimento (Terminal 2)**
   ```bash
   npm run dev
   ```

6. **Acesse a aplicação**
   
   👉 [http://localhost:5173/kanban-react/](http://localhost:5173/kanban-react/)

## 📁 Estrutura do Projeto

```
kanban-project-online/
├── src/
│   ├── assets/          # Imagens e ícones
│   ├── components/      # Componentes React reutilizáveis
│   ├── hooks/          # Hooks customizados
│   ├── interface/      # Interfaces TypeScript
│   ├── pages/          # Componentes de página
│   ├── redux/          # Store e slices Redux
│   │   └── thunks/     # Ações assíncronas
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Ponto de entrada
├── public/             # Assets estáticos
├── db.json            # Banco de dados JSON Server
└── vite.config.ts     # Configuração Vite
```

**Organização:**
- Organização clara por componentes, páginas, hooks e Redux
- Separação de responsabilidades
- Código tipado e escalável

## 🤝 Colaboração

Projeto desenvolvido em equipe durante o desafio técnico:

- [Caio Cavalcanti](https://www.linkedin.com/in/caiohfcavalcanti/)
- [Décio Francis](https://www.linkedin.com/in/deciofrancis/)
- [Deividson Omédio](https://www.linkedin.com/in/deividson-omedio/)
- [Glauce Duarte](https://www.linkedin.com/in/glauce-da-silva-duarte-98004529/)
- [José Tadeu](https://www.linkedin.com/in/josé-tadeu-nascimento/)
- [Ruan Lourenço](https://www.linkedin.com/in/ruan-lourenço/)

## 🎯 Observação Final

Este projeto representa minha evolução prática no desenvolvimento frontend, com foco em React, TypeScript e boas práticas, servindo como base para projetos maiores e ambientes de produção.

---

**Desenvolvido com 💙 durante o programa de estágio da Compass UOL**