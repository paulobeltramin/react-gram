// scss
import './index.scss'

// imports
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const Login = () => {

    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()



    // FUNÇÃO DE ABRIR MODAL
    const openModal = (e) => {
        e.preventDefault();

        const modal = document.querySelector(".modal")

        modal.style.display = "flex"

    }

    // FUNÇÃO DE FECHAR MODAL
    const toclosetModal = (e) => {
        e.preventDefault();
        const modal = document.querySelector(".modal")

        modal.style.display = "none"
    }

    //FUNÇÃO CRIAR USUARIO
    const handleRegister = (e) => {
        e.preventDefault();



        const modal = document.querySelector(".modal")

        modal.style.display = "none"

    };

    // FUNÇÃO LOGAR USUÁRIO
    const handleLogin = (e) => {
        e.preventDefault()




    };



    return (
        <div>

            <div className='fundo'>


                {/* imagem do login */}

                <div className='login'>

                    <div>
                        <img src="logocel.png" alt="logo-celular" />
                    </div>

                    <div className='login__form'>


                        {/* formulario de login */}

                        <form onSubmit={handleLogin}>

                            <div>
                                <img src="Instagram-Logo.png" alt="" />
                            </div>

                            <div>
                                <input type="text" name="login"
                                    placeholder='Telefone, nome de usuário ou email'
                                    value={email} onChange={(e) => setEmail(e.target.value)} />

                                <input type="password" name="senha" placeholder='senha'
                                    value={password} onChange={(e) => setPassword(e.target.value)} />

                                <Link to={'/'}><button type='submit'>Entrar</button></Link>


                                <p>_____________ <span>OU</span> _____________</p>

                            </div>

                            <div>
                                <strong><Link>Entrar com facebook</Link></strong>
                            </div>

                            <div>
                                <Link>Esqueceu a senha?</Link>
                            </div>


                        </form>

                        {/* links de acesso  */}

                        <div className='login__form__cadastro'>
                            <p>Não tem uma conta ?
                                <Link onClick={openModal}>Cadastre-se</Link></p>

                        </div>

                    </div>
                </div>

                {/* modal de criar conta */}

                <div className='modal'>

                    <p onClick={toclosetModal}>X</p>

                    <form className='modal__form ' onSubmit={handleRegister}>


                        <div>
                            <h2>Crie sua conta :) </h2>
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="text" name="email" placeholder='email...'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label>Nome de usuário</label>
                            <input type="text" name="usuario" placeholder='nome de usu...'
                                value={user} onChange={(e) => setUser(e.target.value)} />
                        </div>

                        <div>
                            <label>Senha</label>
                            <input type="password" name="senha" placeholder='senha...'
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <button type='submit'>Criar conta</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}