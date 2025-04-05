import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/popX/" element={<Landing />} />
        <Route path="/popX/login" element={<Login />} />
        <Route path="/popX/dashboard" element={<Dashboard />} />
        <Route path="/popX/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;