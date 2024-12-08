
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Service from './page/Service'
import Home from './page/Home'
import Details from './page/Details'
import Login from './page/login'
import Register from './page/register'


function App() {
  return (
    <>
      <Header />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Details1' element={<Details />} />
  <Route path='/Login1' element={<Login />} />
  <Route path='/register1' element={<Register />} />
  <Route path='/service1' element={<Service />} />
</Routes>

<Footer />
    </>
  )
}

export default App
