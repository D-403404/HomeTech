import './App.css'
// import AppRoute from './routers/Routes'
import LoginRouter from './routers/LoginRouter'
import LoginPage from './pages/login/HomePage'
import SignInPage from './pages/login/SignInPage'
import SignUpPage from './pages/login/SignUpPage'

export default function App() {
  // return <AppRoute />
  // return (
  //   <div>
  //     {/* <LoginPage /> */}
  //     {/* <SignInPage /> */}
  //     {/* <SignUpPage /> */}
  //   </div>
  // )
  return <LoginRouter />
}
