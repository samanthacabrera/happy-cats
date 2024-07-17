import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Sidebar from './Sidebar'
import UserDashboard from './Dashboard'
import CatProfile from './CatProfile'
import Social from './Social';
import './App.css'


function App() {
  const user_id = 1;
  const user = "Alice"
  return (
    <>    
      <Router>
        <Sidebar user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDashboard user_id={user_id} />} />
          <Route path="/cats/:cat_id" element={<CatProfile />} /> 
          <Route path="/social" element={<Social />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
