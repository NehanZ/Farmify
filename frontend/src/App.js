import React from 'react';
import { AuthProvider } from './components/context/AuthContext';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
};

export default App;
