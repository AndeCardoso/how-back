import styled from "styled-components";
import bg from '../../../images/bg.svg'

export const Section = styled.section`
    width: 100%;
    height: 90vh;
    padding: 100px 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    @media screen and (max-width: 658px) {
        height: auto;
        padding: 120px 0 30px;
    }
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
        width: 100%;
        img {
            margin-top: 50px;
        }
    }
    
    @media screen and (max-width: 376px) {
        img {
            width: 100%;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 1200px) {
        align-items: center;
    }
`;

export const Title = styled.h2`
    padding: 15px;
    font-size: 40px;
    margin-bottom: 60px;
    text-align: center;
    line-height: normal;
    border-radius: 50px 0 50px 50px;
    background-color: #FE4400;
`;

export const Text = styled.p`
    font-size: 25px;
    text-align: left;
    line-height: normal;
    text-shadow:3px 3px 10px #000000, 3px 3px 10px #000000;

    span {
        text-transform: uppercase;
        color: #FE4400;
        margin: 0 10px;
    }

    @media screen and (max-width: 1200px) {
        margin: 0 25px;
    }
`;