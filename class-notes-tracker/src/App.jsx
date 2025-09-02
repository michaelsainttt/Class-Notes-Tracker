import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element= {<StartPage />} />
        <Route path = "/login" element= {<LoginPage />} />
        <Route element = {<ProtectedRoutes/>}>
          <Route path = "/dashboard" element= {<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
