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
                    <S.Title>Informações</S.Title>
                    <S.Paragraph>
                    Lorem ipsum dolor sit amet. Ea autem mollitia et voluptatem voluptatum qui veniam unde est earum perspiciatis ex omnis voluptate sed expedita similique eos atque sunt. In mollitia omnis qui dolor animi et vitae optio.

                    Vel reprehenderit quia sit distinctio aut molestiae eveniet qui dolorem nostrum. Et culpa perferendis non velit dolor sit ullam autem aut numquam illo ea assumenda temporibus. Sit tempora maiores hic alias voluptas aut maiores reiciendis nam tempora quisquam sed voluptatem sunt! Ut aperiam ipsam qui molestiae iure et labore omnis aut ratione placeat.

                    Est ratione exercitationem est omnis voluptas est minima voluptate sit exercitationem temporibus aut consequatur rerum ex ipsum voluptatibus et dolores doloribus? A pariatur ipsam aut magni illum aut quod voluptates.
                    </S.Paragraph>
                    <S.Buttons>
                        <Button to="/" >+Informações</Button>
                    </S.Buttons>
                </S.Content>
            </S.Container>
        </S.Section>
    )
}

export default Informations;