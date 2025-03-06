import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Form, Alert, Card } from 'react-bootstrap';
import { authStyles } from './authStyles'; // Make sure to import from the correct file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const success = await login(email, password, rememberMe);
      if (success) navigate('/');
    } catch (error) {
      setError('ایمیل یا رمز عبور اشتباه است!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page" style={authStyles.pageContainer}>
      <div style={authStyles.cardContainer}>
        <Card style={authStyles.card}>
          <Card.Body style={authStyles.cardContent}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={authStyles.title}>خوش آمدید</h2>
              <p style={authStyles.subtitle}>لطفا وارد حساب کاربری خود شوید</p>
            </div>
            
            {error && (
              <Alert 
                variant="danger" 
                className="text-center mb-4"
                style={{ borderRadius: '8px' }}
              >
                {error}
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group style={authStyles.formGroup}>
                <Form.Label style={authStyles.formLabel}>ایمیل</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={authStyles.input}
                  autoFocus
                />
              </Form.Group>
              
              <Form.Group style={authStyles.formGroup}>
                <Form.Label style={authStyles.formLabel}>رمز عبور</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={authStyles.input}
                />
              </Form.Group>
              
              <div style={authStyles.checkboxContainer}>
                <Form.Check
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  label="مرا به خاطر بسپار"
                  style={{ fontSize: '0.875rem' }}
                />
                <a href="/forgot-password" style={authStyles.forgotPassword}>
                  فراموشی رمز عبور؟
                </a>
              </div>
              
              <Button
                variant="primary"
                type="submit"
                style={authStyles.button}
                disabled={loading}
              >
                {loading ? 'لطفا صبر کنید...' : 'ورود'}
              </Button>
              
              <p style={authStyles.registerText}>
                حساب کاربری ندارید؟{' '}
                <Link to="/signup" style={authStyles.link}>
                  ایجاد حساب
                </Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;