import './index.scss'

// imports
import { Header } from "../header-login/Header";
import { DiAptana } from "react-icons/di"



export const Home = () => {
    return (
        <>
            <Header />

            <div>

                {/* cabeçalho */}
                <section className="perfil">

                    <div className="perfil__header">
                        <img src="insta-perfil.jpg" alt="foto perfil" />

                        <div>
                            <p>Paulobeltramin</p>
                            <div>

                            </div>
                        </div>

                        <div>
                            <button>Editar perfil</button>
                            <button>Ver itens arquivados</button>


                        </div>
                        <div>

                        </div>
                        <div>
                            <i><DiAptana /></i>
                        </div>

                    </div>




                    <div className='perfil__info'>

                        <span>44 publicações</span>
                        <span>196 seguidores</span>
                        <span>359 seguindo</span>

                    </div>

                    <div className='perfil__icon'>



                    </div>

                    <div className='perfil__icon'>
                        <span>+</span>
                        <p>novo</p>
                    </div>

                </section>


                {/* publicações */}
                <section className='public'>
                    <nav>
                        <ul>
                            <li>PUBLICAÇÕES</li>
                            <li>REELS</li>
                            <li>SALVOS</li>
                            <li>MARCADOS</li>
                        </ul>
                    </nav>
                </section>

                {/* imagens  */}
                <section className='images'>

                    <div>
                        <img src="images-1.webp" alt="" />
                    </div>


                    <div>
                        <img src="images-2.jpeg" alt="" />
                    </div>


                    <div>
                        <img src="images-3.jpeg" alt="" />
                    </div>


                    <div>
                        <img src="images-4.jpeg" alt="" />
                    </div>




                </section>
            </div>

        </>



    )
}