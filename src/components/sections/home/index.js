import * as S from './styled'

const Home = () => {
    return (
        <S.Section id="home">
            <S.Container>
                <S.Content>
                    <S.Title>Gostaria de voltar?!</S.Title>
                    <S.Text>
                        Com a Pandemia da Covid-19, muita coisa mudou. O trabalho remoto não foi 
                        uma opção, mas sim necessário e assim se foram quase 2 anos de home 
                        office.
                        <br />
                        Porém, hoje com a vacinação em andamento, já podemos enxergar 
                        novas possibilidades, e aqui na FCamara não é diferente, com muito cuidado 
                        e segurança estamos planejando a reabertura da nossa empresa.
                        <br />
                        <br />
                        E claro, este retorno só será para aqueles que <span>desejarem voltar</span> ao trabalho presencial!
                        <br />
                        <br />
                        Estamos muito felizes com essa novidade, mas sabemos que não será como antes.
                    </S.Text>
                </S.Content>
            </S.Container>
        </S.Section>
    )
}

export default Home;