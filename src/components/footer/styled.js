import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background-color: #36357E;
    
    a {
        width: auto;
    }
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 50%;
        filter: brightness(1000%);
    }
    
    @media screen and (max-width: 750px){
        flex-direction: column;
        width: 100%;

        a{
            text-align: center;
        }
    }
    
    @media screen and (max-width: 426px){
        flex-direction: column;
    }
`;

export const CopyTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
        text-decoration: none;
        font-weight: bolder;
        margin: 0 5px;
    }
`;

export const Copyright = styled.span`
    font-size: 15px;
    margin-bottom: 10px;
`;

export const Rights = styled.p`
    font-size: 15px;
    font-style: italic;
    margin-bottom: 10px;
`;

export const MadeBy = styled.span`
    display: flex;
    align-items: center;

    svg {
        margin-left: 5px;
    }

    @media screen and (max-width: 321px) {
        flex-direction: column;
    }
`;