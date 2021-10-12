import Image from '../../dumb/img';
import { Button } from '../../dumb/button';
import Illustration from '../../../images/illustration01.svg';

import * as S from './styled';

const Informations = () => {
    
    return (
        <S.Section id="informations">
            <S.Container>
                <Image path={Illustration} type='Illustration' />
                <S.Content>
                    <S.Title>Como voltar?</S.Title>
                    <S.Paragraph>
                    Os escritórios voltarão a ficar abertos no horário das 8h às 18h, e os 2 escritórios: um em São Paulo (principal) e outro em Santos (filial),
                    estarão disponíveis para o acesso.
                    <br />
                    <br />
                    Para tornar ainda mais seguro a sua volta ao trabalho presencial, desenvolvemos a Agenda FCamara,
                    um sistema web para você agendar sua ida ao escritório de sua preferência da forma mais simples e rápida possível.
                    <br />
                    <br />
                    Você pode acessar o sistema através do botão abaixo.
                    </S.Paragraph>
                    <S.Buttons>
                        <Button to="https://github.com/AndeCardoso/fcamara-agenda" >Agenda FCamara</Button>
                    </S.Buttons>
                </S.Content>
            </S.Container>
        </S.Section>
    )
}

export default Informations;