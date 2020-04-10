import styled from 'styled-components';
export const SignInAndSignUpContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const SignInAndSignUpBackground = styled.div`
  width: 42%;
  svg {
    width: 100%;
  }
`;

export const SignInAndSignUpInner = styled.div`
  display: flex;

  width: 850px;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  position: relative;
  top: -18px;
`;

export const SignInAndSignUpContent = styled.div`
  width: 50%;
`;

export const SignInAndSignUpTitle = styled.h2`
  font-weight: 400;
`;

export const SignInAndSignUpLink = styled.span`
  text-decoration: underline;
  font-size: 11px;
  cursor: pointer;
`;

export const SignInAndSignUpHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
