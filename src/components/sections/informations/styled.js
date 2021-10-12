import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 100px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 0 200px;
    border-bottom: solid 4px;
    border-image: linear-gradient(to right, #36357E, #ffffff) 1;
    
    @media screen and (max-width: 1200px) {
        width: 100%;
        flex-direction: column;

        img {
            margin-bottom: 30px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #36357E;
`;

export const Title = styled.h2`
    padding: 15px;
    display: flex;
    justify-content: center;
    font-size: 40px;
    border-radius: 50px 0 50px 50px;
    background-color: #36357E;
    color: #ffffff;
`;

export const Paragraph = styled.p`
    width: 100%;
    padding: 24px;
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
