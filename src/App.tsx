import { Home } from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { Administrador } from './pages/Administrador';

function App() {

  return (
    <>
     <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Login />} />
                <Route path='/servidor' element={<Administrador />}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
