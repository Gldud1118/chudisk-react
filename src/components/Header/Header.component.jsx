import React from 'react';
import {
  OptionsContainer,
  OptionLink,
  HeaderContainer,
  LogoContainer
} from './Header.styles';
import Logo from '../Logo/Logo.componenet';

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
  </HeaderContainer>
);

export default Header;
