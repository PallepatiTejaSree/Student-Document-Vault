import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './loginpage/login';
// import Dashboard from './Dashboard/dashboard'; 
import Dashboard from './Dashboard/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

