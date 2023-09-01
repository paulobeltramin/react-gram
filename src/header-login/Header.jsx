// css
import "./index.scss"

// imports 

import { Link } from "react-router-dom"
import { FiEdit, FiHome, FiInstagram, FiLogIn, FiMenu, FiSearch, FiX } from "react-icons/fi"
import { BsCameraReels, BsHeart } from "react-icons/bs"
import { BiMessageRoundedCheck, BiLogoInstagramAlt } from "react-icons/bi"
import { CgAddR } from "react-icons/cg"







export const Header = () => {





    // FUNÇÃO DE ABRIR MODAL
    const openModal = (e) => {
        e.preventDefault();

        const modal = document.querySelector(".home")

        modal.style.display = "flex"

    }


    // FUNÇÃO DE FECHAR MODAL
    const toclosetModal = (e) => {
        e.preventDefault();
        const modal = document.querySelector(".home")

        modal.style.display = "none"
    }


    //    função upload
    const handleUpload = (e) => {
        e.preventDefault()
    }






    return (

        <div>


            <header className="header">
                <div className="header__icons">
                    <Link to={'/login'}><FiLogIn /></Link>
                    <Link><FiInstagram /></Link>
                    <Link><FiHome /></Link>
                    <Link><FiSearch /></Link>
                    <Link><FiEdit /></Link>
                    <Link><BsCameraReels /></Link>
                    <Link><BiMessageRoundedCheck /></Link>
                    <Link><BsHeart /></Link>
                    <Link onClick={openModal}><CgAddR /></Link>
                    <Link><FiMenu /></Link>
                </div>
            </header>


            {/* class geral */}
            <div className="home">

                {/* criar publicação */}
                <div className="home__content">
                    <p onClick={toclosetModal}><FiX /></p>
                    <div>

                        <h3>Criar nova publicação</h3>

                        <form onSubmit={(e) => handleUpload(e)}>
                            <div>

                                <i><BiLogoInstagramAlt /></i>
                                <h2>Arraste as fotos e os vídeos aqui</h2>
                                <input id="posttitle" type="text" placeholder="titulo..." />
                                <input type="file"
                                />

                                <button type="submit">Enviar</button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>






    )
}