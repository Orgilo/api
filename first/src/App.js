import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ForgetPasswordPage from './components/ForgetPasswordPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/forget-password">Forgot Password</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

