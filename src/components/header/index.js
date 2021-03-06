import React, { useState, useRef } from 'react';

import { Image, Link } from '../dumb/button';
import Menu from '../dumb/burger/menu';
import Burger from '../dumb/burger';

import Logo from '../../images/logo.svg';
import { useOnClickOutside } from './hook';
import * as S from './styled';

const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    
    useOnClickOutside(node, () => setOpen(false));

    return (
        <S.Header>
            <S.Container>
                <Image type="Logo" path={Logo} to='#' />
                <S.MenuBurger ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </S.MenuBurger>
                <S.Menu>
                    <Link to='#home'>Inicio</Link>
                    <Link to='#informations'>Informações</Link>
                    <Link to='#rules'>Regras</Link>
                </S.Menu>
            </S.Container>
        </S.Header>
    )
}

export default Header;