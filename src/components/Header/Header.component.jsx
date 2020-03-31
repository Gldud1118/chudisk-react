import React from 'react';
import {
  OptionsContainer,
  OptionLink,
  Logo,
  HeaderContainer,
  LogoHead,
  LogoContainer
} from './Header.styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo to='/disk/my-disk' className='logo'>
        <LogoHead>Chu</LogoHead>disk
      </Logo>
    </LogoContainer>
  </HeaderContainer>
);

export default Header;
