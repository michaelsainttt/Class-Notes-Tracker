import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ProtectedRoutes from './components/ProtectedRoutes';

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
