import styled from "styled-components";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FiMaximize2 } from "react-icons/fi";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    const iconeFavorito = foto.favorita ? <IoIosHeart color="white" size={25}/> : <IoIosHeartEmpty color="white" size={25}/>

    return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.titulo} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                    {iconeFavorito}
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                    <FiMaximize2 color="white" size={25}/>
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </Figure>)
}

export default Imagem;
