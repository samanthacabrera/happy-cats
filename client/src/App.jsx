import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Sidebar from './Sidebar'
import UserDashboard from './Dashboard'
import CatProfile from './CatProfile'
import './App.css'


function App() {
const user_id = 1
  return (
    <div> 
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDashboard user_id={user_id} />} />
          <Route path="/cats/:cat_id" element={<CatProfile />} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
