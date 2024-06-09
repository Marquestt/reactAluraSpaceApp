import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


const RodapeEstilizado = styled.footer`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
    background-color: #04244F;
    color: #FFF;
    height: 80px;
    align-items: center;
`;

const IconesRedesSociais = styled.div`
    display: flex;
    gap: 40px;
`;

const Rodape = () => {
    return(
        <RodapeEstilizado>
            <IconesRedesSociais>
                <a href="https://www.facebook.com/AluraCursosOnline/?locale=pt_BR"><FaFacebook color="white" size={25}/></a>
                <a href="https://x.com/AluraOnline?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitter color="white" size={25}/></a>
                <a href="https://www.instagram.com/aluraonline/"><FaInstagram color="white" size={25}/></a>
            </IconesRedesSociais>
            Desenvolvido por Alura e Thatyane Marques.
        </RodapeEstilizado>
    );
}

export default Rodape;