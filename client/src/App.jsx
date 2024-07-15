import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Sidebar from './Sidebar'
import UserDashboard from './Dashboard'
import CatProfile from './CatProfile'
import CatsList from './CatList'
import Footer from './Footer'
import './App.css'

function App() {

  return (
    <>    
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/profile/:id" element={<CatProfile />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
