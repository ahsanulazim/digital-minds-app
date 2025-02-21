import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import Footer from './components/Footer'
import Registration from './components/Registration'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="digital-minds-app" element={<Home />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />}>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
