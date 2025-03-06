// src/components/Dashboard.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container mt-5">
      <h2>خوش آمدید!</h2>
      <p>توکن JWT شما: {user?.token}</p>
      <Button variant="danger" onClick={logout}>
        خروج
      </Button>
    </div>
  );
};

export default Dashboard;