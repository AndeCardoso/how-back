import * as S from './styled';
import { Image } from '../dumb/button'
import Logo from '../../images/logo.svg'
import { FaReact } from "react-icons/fa";

const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <Image path={Logo} type="FooterLogo" to="#home" />
                <S.CopyTexts>
                    <S.Copyright>© 2021 FCamara Formação e Consultoria.</S.Copyright>
                    <S.Rights>Todos os direitos reservados.</S.Rights>
                    <S.MadeBy>Made by
                        <a href="https://www.linkedin.com/in/anderson-cardoso-781b56102/" target="_blank" rel="noreferrer"> Anderson Cardoso </a>
                        with <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <FaReact size="20px" /> </a>
                    </S.MadeBy>
                </S.CopyTexts>
            </S.Container>
        </S.Footer>
    )
}

export default Footer;