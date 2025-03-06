// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Form, Alert, Card } from 'react-bootstrap';
import { authStyles } from './authStyles'; // Make sure to import from the correct file

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('رمز عبور و تکرار آن مطابقت ندارند!');
      return;
    }
    
    setLoading(true);
    
    try {
      const success = await signup(formData.name, formData.email, formData.password);
      if (success) {
        navigate('/login');
      } else {
        setError('ثبت‌نام ناموفق! لطفاً دوباره تلاش کنید.');
      }
    } catch (error) {
      setError('خطا در ایجاد حساب کاربری');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page" style={authStyles.pageContainer}>
      <div style={authStyles.cardContainer}>
        <Card style={authStyles.card}>
          <Card.Body style={authStyles.cardContent}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={authStyles.title}>ایجاد حساب کاربری</h2>
              <p style={authStyles.subtitle}>برای عضویت اطلاعات زیر را وارد کنید</p>
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
                <Form.Label style={authStyles.formLabel}>نام</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={authStyles.input}
                  autoFocus
                />
              </Form.Group>
              
              <Form.Group style={authStyles.formGroup}>
                <Form.Label style={authStyles.formLabel}>ایمیل</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={authStyles.input}
                />
              </Form.Group>
              
              <Form.Group style={authStyles.formGroup}>
                <Form.Label style={authStyles.formLabel}>رمز عبور</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={authStyles.input}
                />
              </Form.Group>
              
              <Form.Group style={authStyles.formGroup}>
                <Form.Label style={authStyles.formLabel}>تکرار رمز عبور</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  style={authStyles.input}
                />
              </Form.Group>
              
              <Button
                variant="primary"
                type="submit"
                className="w-100 mt-2"
                style={authStyles.button}
                disabled={loading}
              >
                {loading ? 'لطفا صبر کنید...' : 'ثبت‌نام'}
              </Button>
              
              <p style={authStyles.registerText}>
                قبلا ثبت‌نام کرده‌اید؟{' '}
                <Link to="/login" style={authStyles.link}>
                  ورود به حساب
                </Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Signup;