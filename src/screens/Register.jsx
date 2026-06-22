import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import Reveal from '../components/Reveal';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <>
      <Header />
      <main className="container">
        <Reveal>
          <div className="auth-container">
            <h2 className="auth-title">Create Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="auth-form-group">
                <label>Full Name</label>
                <input type="text" required placeholder="Jordan Lee" />
              </div>
              <div className="auth-form-group">
                <label>Email Address</label>
                <input type="email" required placeholder="you@example.com" />
              </div>
              <div className="auth-form-group">
                <label>Password</label>
                <input type="password" required placeholder="••••••••" />
              </div>
              <div className="auth-form-group">
                <label>Confirm Password</label>
                <input type="password" required placeholder="••••••••" />
              </div>
              <button type="submit" className="btn-orange auth-submit-btn">
                Create Account
              </button>
              <p className="auth-switch-text">
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
};

export default Register;
