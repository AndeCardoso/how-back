import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 0 15px;
    color: #36357E;
    transition: ease-in-out all 1s;
`;

export const Text = styled.div`
    flex-direction: column;
    font-size: 32px;
    margin-bottom: 15px;
`;

export const Title = styled.h2`
    font-size: 32px;
    margin-bottom: 15px;
`;

export const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
`;

export const illustration = styled.div`
    align-items: center;
`;