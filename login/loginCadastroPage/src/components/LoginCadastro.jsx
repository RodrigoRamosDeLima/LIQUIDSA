import React, { useState } from 'react';
import TabsLanding from './TabsLanding/TabsLanding';
import './LoginCadastro.css';
import Cadastro from './Cadastro/Cadastro';
import Login from './Login/Login';

const LoginCadastro = () => {
  const [isLogin, setIsLogin] = useState(false);

  // Alterar a visualização com base na aba selecionada
  const toggleView = (key) => {
    setIsLogin(key === 'login');
  };

  return (
    <div className="container">
      <TabsLanding toggleView={toggleView} />
      <div className="login-cadastro-box">
        <div className={`form-section ${isLogin ? 'login-active' : 'cadastro-active'}`}>
          {isLogin ? (
            <Login />
          ) : (
            <Cadastro />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;
