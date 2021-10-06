import styled from 'styled-components';
import { Image } from '../dumb/button/styled';

export const Header = styled.header`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FE4400;
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const LogoButton = styled(Image)`
    margin-left: 15px;
`;