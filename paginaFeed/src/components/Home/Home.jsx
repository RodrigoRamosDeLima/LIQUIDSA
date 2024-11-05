import { useState } from 'react'
import './Home.css';


function Home() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };


  return (
    <div className="container">
            <div className="logo-container">
                <img src="/png/icon_transparent.png" alt="Logo do site" className="logo" />
            </div>
            <div className="form-container">
            <img src="/png/liquidEscrita.png" alt="Logo do site" className="logo" />
                {isLogin ? (
                    <form className="form">
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <button type="submit" className="btn">Entrar</button>
                    </form>
                ) : (
                    <form className="form">
                        <input type="text" placeholder="Nome completo" />
                        <input type="text" placeholder="@Nome de Usuário" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <input type="password" placeholder="ConfirmaSenha" />
                        <button type="submit" className="btn">Cadastrar-se</button>
                    </form>
                )}
                <p className="toggle-text">
                    {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"} 
                    <span onClick={toggleForm} className="toggle-link">
                        {isLogin ? " Cadastre-se" : " Entre"}
                    </span>
                </p>
            </div>
        </div>
  )
}

export default Home
