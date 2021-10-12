import Home from '../sections/home';
import InfoCards from '../sections/info-cards';
import Informations from '../sections/informations';

import * as S from './styled';

const Main = () => {
    return (
        <S.Main>
            <Home />
            <Informations />
            <InfoCards />
        </S.Main>
    );
};

export default Main;