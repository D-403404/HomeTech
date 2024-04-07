import './App.css'
import { Route, Routes } from "react-router-dom";
import LoginRouter from './routers/LoginRouter'
import AppRouter from './routers/AppRouter'
import LoginPage from './pages/login/HomePage'
import SignInPage from './pages/login/SignInPage'
import SignUpPage from './pages/login/SignUpPage'
import Sidebar from './components/sidebar/Sidebar';

import AppLayout from './components/layout/AppLayout';

export default function App() {
  // return (
  //   <div>
  //     {/* <LoginPage /> */}
  //     {/* <SignInPage /> */}
  //     {/* <SignUpPage /> */}
  //   </div>
  // )
  return (
    <Routes>
      <Route exact path='/*' element={<LoginRouter />} />
      <Route exact path='/home/*' element={<AppRouter />} />
    </Routes>
  )
  // return <Sidebar />
}
