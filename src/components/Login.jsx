import React, { useState } from 'react';
import './css/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        console.log('Redirecionando para a aplicação Vite...');

        // Usando window.open para garantir que o redirecionamento funcione
        window.location.href = 'http://localhost:5173/auth/sign-in';
    };

    return (
        <div className="container" style={{ marginTop: "120px", marginBottom: "60px" }}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={{
                        borderRadius: '1rem',
                        backgroundColor: '#333',
                        color: '#fff',
                        boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)'
                    }}>
                        <div className="card-body p-5 text-center">
                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className="text-white-50 mb-5">Por favor, digite seu email e senha!</p>

                            <form onSubmit={handleLogin}>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control form-control-lg"
                                        placeholder="Senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <p className="small mb-3 pb-lg-2">
                                    <a className="text-white-50" href="#!">Esqueceu a senha?</a>
                                </p>

                                <button
                                    type="submit"
                                    className="btn btn-lg px-5"
                                    style={{
                                        backgroundColor: "#ec8a01",
                                        color: "#fff",
                                        fontWeight: "600",
                                        borderRadius: "20px"
                                    }}
                                >
                                    Entrar
                                </button>
                            </form>

                            <div className="d-flex justify-content-center mt-4 mb-4">
                                <a href="#!" className="mx-3" style={{ color: 'white' }}>
                                    <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a href="#!" className="mx-3" style={{ color: 'white' }}>
                                    <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="#!" className="mx-3" style={{ color: 'white' }}>
                                    <i className="fa fa-google fa-lg"></i>
                                </a>
                            </div>

                            <div>
                                <p className="mb-0">Não tem uma conta? <a href="/registro" className="text-white-50 fw-bold">Cadastre-se</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;