import Card from "../../dumb/card";
import * as S from './styled'

const InfoCards = () => {
    return(
        <S.Section>
            <S.Container id="#info-cards">
                <Card
                    title=""
                    description="Os escritórios voltarão a ficar abertos no horário das 8h às 18h."
                />
                <Card
                    title=""
                    description="Nós temos 2 escritórios: um em São Paulo (principal) e outro em Santos (filial)."
                />
                <Card
                    title=""
                    description="O retorno ao escritório só é possível através de um sistema de agendamento, onde os 
                    #SangueLaranjas poderão optar qual escritório ir, além de escolher data e também a estação de 
                    trabalho demarcada com um número."
                />
                <Card
                    title=""
                    description="Será medida a temperatura ao chegar no escritório."
                />
                <Card
                    title=""
                    description="Todos os consultores deverão usar máscaras dentro das acomodações dos escritórios."
                />
                <Card
                    title=""
                    description="Nas mesas existem adesivos sinalizando onde os #SangueLaranjas devem sentar, para que haja 
                    o distanciamento necessário."
                />
                <Card
                    title=""
                    description="Pessoas que estiverem sentindo algum sintoma não devem ir trabalhar presencialmente, a 
                    indicação é para que permaneçam em casa."
                />
                <Card
                    title=""
                    description="Os escritórios só podem comportar até 40% dos consultores, conforme a legislação."
                />
            </S.Container>
        </S.Section>
    )
}

export default InfoCards;