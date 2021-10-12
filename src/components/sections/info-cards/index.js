import Card from "../../dumb/card";
import * as S from './styled'

import { MdMasks, MdCalendarToday, MdSocialDistance, MdSick } from "react-icons/md";
import { FaTemperatureLow } from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const InfoCards = () => {

    const size = '100px'

    return(
        <S.Section id="rules">
            <S.Container>
                <S.Title>Algumas regras precisam ser cumpridas!</S.Title>
                <S.Cards>
                    <Card
                        icon={<MdCalendarToday size={size} />}
                        title=""
                        description="O retorno ao escritório só é possível através do sistema Agenda FCamara."
                    />
                    <Card
                        icon={<FaTemperatureLow size={size} />}
                        title=""
                        description="Será medida a temperatura ao chegar no escritório."
                    />
                    <Card
                        icon={<MdMasks size={size} />}
                        title=""
                        description="Todos os consultores deverão usar máscaras dentro das acomodações dos escritórios."
                        />
                    <Card
                        icon={<MdSocialDistance size={size} />}
                        title=""
                        description="Nas mesas existem adesivos sinalizando onde os #SangueLaranjas devem sentar, para que haja 
                        o distanciamento necessário."
                        />
                    <Card
                        icon={<MdSick size={size} />}
                        title=""
                        description="Pessoas que estiverem sentindo algum sintoma não devem ir trabalhar presencialmente, a 
                        indicação é para que permaneçam em casa."
                        />
                    <Card
                        icon={<GoGraph size={size} />}
                        title=""
                        description="Os escritórios só podem comportar até 40% dos consultores, conforme a legislação."
                    />
                </S.Cards>
            </S.Container>
        </S.Section>
    )
}

export default InfoCards;