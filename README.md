# 🎯 Project Manager - Kanban Board Application

> A modern, full-stack project management application built with React, TypeScript, and real-time collaboration features. Developed as part of a technical challenge at UOL.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://seu-usuario.github.io/kanban-project-online/kanban-react/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)

## 📖 About The Project

Project Manager is a comprehensive Kanban board application designed to streamline team collaboration and task management. The application implements modern web development practices, featuring authentication, real-time updates, and an intuitive drag-and-drop interface.

**Key Highlights:**
- 🔐 Secure authentication with Clerk (Email, Password, OAuth)
- 📊 Dynamic Kanban boards with drag-and-drop functionality
- 👥 User management and task assignment
- 📱 Fully responsive design (mobile-first approach)
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast performance with Vite
- 🔄 State management with Redux Toolkit

## :camera: Preview

![kanban Preview](src/assets/readMe_preview/kanban.gif)

## ✨ Features

### 🎯 Task Management
- Create, edit, and delete tasks with rich details
- Organize tasks across customizable columns (To Do, In Progress, Done)
- Drag-and-drop interface for intuitive task movement
- Task priority levels and status tracking
- Task assignment to team members

### 👤 User Management
- Secure user authentication (Email/Password + OAuth)
- User profile management
- Role-based access control
- Team member assignment and tracking

### 🎨 User Experience
- Responsive design optimized for all devices
- Smooth animations and transitions
- Dark mode support
- Intuitive navigation
- Real-time updates

### 🔒 Security
- JWT-based authentication via Clerk
- Protected routes
- Secure API endpoints
- Environment variable configuration

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript 5.6** - Type-safe JavaScript
- **Vite 6.0** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Redux Toolkit 2.5** - State management
- **React Router 7.1** - Client-side routing
- **React Beautiful DnD** - Drag and drop

### Backend & Authentication
- **Clerk 5.21** - Authentication and user management
- **JSON Server 1.0** - Mock REST API
- **Axios** - HTTP client

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ and npm
- Git
- Clerk account ([Sign up free](https://clerk.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/seu-usuario/kanban-project-online.git
   cd kanban-project-online
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Clerk Authentication**
   - Create a [Clerk account](https://clerk.com/)
   - Create a new application in Clerk Dashboard
   - Enable Email and Password authentication
   - Enable Google OAuth (optional)
   - Add redirect URLs:
     - `http://localhost:5173/kanban-react/sso-callback`
     - `http://localhost:5173/kanban-react/kanban`

4. **Set up environment variables**
   
   Create `.env.local` in the root directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   CLERK_SECRET_KEY=your_clerk_secret_key_here
   ```

5. **Start JSON Server (Terminal 1)**
   ```bash
   npx json-server db.json --port 3000
   ```

6. **Start development server (Terminal 2)**
   ```bash
   npm run dev
   ```

7. **Access the application**
   
   Open [http://localhost:5173/kanban-react/](http://localhost:5173/kanban-react/)

## 📦 Build for Production

```bash
npm run build
npm run preview
```

The build output will be in the `dist/` directory.

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages. Every push to `main` branch triggers a build and deploy.

**Live URL:** `https://seu-usuario.github.io/kanban-project-online/kanban-react/`

## 📁 Project Structure

```
kanban-project-online/
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable React components
│   ├── hooks/          # Custom React hooks
│   ├── interface/      # TypeScript interfaces
│   ├── pages/          # Page components
│   ├── redux/          # Redux store and slices
│   │   └── thunks/     # Async actions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── .github/
│   └── workflows/      # GitHub Actions CI/CD
├── db.json            # JSON Server database
└── vite.config.ts     # Vite configuration
```

## 🎨 Key Features Implementation

### Authentication Flow
- Login with email/password or OAuth providers
- Protected routes with automatic redirection
- Session management with Clerk
- Logout functionality

### Kanban Board
- Drag-and-drop task management
- Multiple column support
- Task creation with form validation
- Real-time updates

### State Management
- Redux Toolkit for global state
- Async thunks for API calls
- Optimistic UI updates

## 🤝 Team

This project was developed collaboratively by:

- [Caio Cavalcanti](https://www.linkedin.com/in/caiohfcavalcanti/) - Frontend Developer
- [Décio Francis](https://www.linkedin.com/in/deciofrancis/) - Frontend Developer
- [Deividson Omédio](https://www.linkedin.com/in/deividson-omedio/) - Frontend Developer
- [Glauce Duarte](https://www.linkedin.com/in/glauce-da-silva-duarte-98004529/) - Frontend Developer
- [Jose Tadeu](https://www.linkedin.com/in/josé-tadeu-nascimento/) - Frontend Developer
- [Ruan Lourenço](https://www.linkedin.com/in/ruan-lourenço/) - Frontend Developer

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- UOL for the technical challenge opportunity
- Clerk for authentication infrastructure
- The React community for excellent documentation

---

**Note:** This project demonstrates modern web development practices including TypeScript, React hooks, state management, authentication, and responsive design. It showcases the ability to build full-featured, production-ready applications.
