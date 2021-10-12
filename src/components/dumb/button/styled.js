import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    padding: 10px 0;
    font-size: 24px;
    color: #ffffff;
    cursor: pointer;
    margin: 15px;
    background-color: #36357E;
    transition: ease-in-out all 0.5s;

    :hover {
        color: #7474B4;
    }
    
    a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Link = styled.button`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 24px;
    margin-right: 15px;
    background-color: unset;
    color: #36357E;
    word-break: keep-all;
    cursor: pointer;
    transition: ease-in-out all 0.2s;

    :hover {
        color: #7474B4;
    }
`;

export const Image = styled.img`
    height: 35px;
    cursor: pointer;
`;

export const Logo = styled.img`
    height: 50px;
    cursor: pointer;
    transition: ease-in-out all 1s;
`;

export const FooterLogo = styled.img`
    height: 90px;
    margin: 15px;
    cursor: pointer;
`;