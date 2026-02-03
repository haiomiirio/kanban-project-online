import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute";
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton, } from '@clerk/clerk-react'

import Header from './components/Header'
import Footer from './components/Footer'


import Home from './pages/Home'
import Kanban from './pages/Kanban'
import AccessDenied from './pages/AccessDenied'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound'
import DeleteUserForm from './components/DeleteUserForm'

import { useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../src/redux/store";
import { fetchTasks } from "./redux/thunks/tasksThunks";

import { fetchUsers } from "./redux/thunks/usersThunks";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {

  
  const dispatch = useDispatch<AppDispatch>();
  const dados = useSelector((state: RootState) => state.tasks.value);
  const dadosUsers = useSelector((state: RootState) => state.users.value);

  useEffect(() => {
      dispatch((fetchTasks()));
      dispatch((fetchUsers()));
  }, [dispatch]);

  // Se não houver chave do Clerk, renderiza sem autenticação (modo demo)
  if (!PUBLISHABLE_KEY) {
    return (
      <BrowserRouter basename="/kanban-project-online">
        <Header/>
        <Routes>
          {/* Rotas públicas */}
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/sso-callback' element={<div>Processando...</div>} />

          {/* Rotas sem proteção no modo demo */}
          <Route path='/kanban' element={<Kanban/>} />
          <Route path='/delete' element={<DeleteUserForm/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/profile' element={<Profile/>} />

          {/* Rota 404 */}
          <Route path='/*' element={<PageNotFound/>} />

          {/* Rota 403 */}
          <Route path='/denied' element={<AccessDenied/>} />
        </Routes> 
        <Footer/>
      </BrowserRouter>
    );
  }

  return (
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      signInUrl="/kanban-project-online/login"
      signUpUrl="/kanban-project-online/signup"
      signInFallbackRedirectUrl="/kanban-project-online/kanban"
      signUpFallbackRedirectUrl="/kanban-project-online/kanban"
      afterSignOutUrl="/kanban-project-online/"
    >
      <BrowserRouter basename="/kanban-project-online">
        <Header/>
        <Routes>
          {/* Rotas públicas */}
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/sso-callback' element={<div>Processando...</div>} />

          {/* Rotas protegidas */}
          <Route 
            path='/kanban' 
            element={
              
              <ProtectedRoute>
                <Kanban/>
              </ProtectedRoute>
            } 
          />

          <Route
            path='/delete'
            element={
              <ProtectedRoute>
                <DeleteUserForm/>
              </ProtectedRoute>
              }
          />
          <Route 
            path='/settings' 
            element={
              <ProtectedRoute>
                <Settings/>
              </ProtectedRoute> 
            }
          />
          <Route 
            path='/profile' 
            element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            } 
          />

          {/* Rota 404 */}
          <Route path='/*' element={<PageNotFound/>} />

          {/* Rota 403 */}
          <Route path='/denied' element={<AccessDenied/>} />
        </Routes> 

        
        <Footer/>
      </BrowserRouter>
    </ClerkProvider>
  )
}

export default App
