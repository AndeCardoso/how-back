import styled from 'styled-components';

export const Container = styled.div`
    width: 45%;
    min-width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    margin: 10px;
    padding: 40px 15px;
    color: #ffffff;
    background-color: #FE4400;
    transition: ease-in-out all 0.6s;

    :hover{
        filter: opacity(90%);
        box-shadow: 1px 1px 10px black;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Text = styled.div`
    margin-bottom: 15px;
`;

export const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    text-align: justify;
`;

export const Icon = styled.div`
    align-items: center;
    margin: 0 10px;
`;