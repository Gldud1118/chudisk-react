import React, { Component } from 'react';
import SignIn from '../../components/SignIn/SignIn.componenet';
import SignUp from '../../components/SignUp/SignUp.component';
import Logo from '../../components/Logo/Logo.componenet';
import {
  SignInAndSignUpContainer,
  SignInAndSignUpContent,
  SignInAndSignUpBackground,
  SignInAndSignUpTitle,
  SignInAndSignUpInner,
  SignInAndSignUpLink,
  SignInAndSignUpHead,
  LogoContainer,
} from './SignInAndSignUp.styles';
import { ReactComponent as IconAuth } from '../../assets/auth.svg';

class SignInAndSignUp extends Component {
  constructor(props) {
    super(props);
    this.toggleSignPart = this.toggleSignPart.bind(this);

    this.state = {
      signIn: true,
    };
  }

  componentDidMount() {
    //로그인 상태 체크
    //만약 로그인이 되어 있는 상태면 메인 페이지로 redirect
  }

  toggleSignPart() {
    this.setState((state) => {
      return {
        signIn: !state.signIn,
      };
    });
  }
  render() {
    return (
      <SignInAndSignUpContainer className='sign-in-and-sign-up'>
        <SignInAndSignUpInner>
          <SignInAndSignUpBackground>
            <IconAuth />
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </SignInAndSignUpBackground>
          <SignInAndSignUpContent>
            <SignInAndSignUpHead>
              <SignInAndSignUpTitle>
                {this.state.signIn ? 'Sign In' : 'Create an account'}
              </SignInAndSignUpTitle>
              <SignInAndSignUpLink onClick={this.toggleSignPart}>
                {this.state.signIn ? '계정이 없으십니까?' : '로그인'}
              </SignInAndSignUpLink>
            </SignInAndSignUpHead>
            {this.state.signIn ? <SignIn /> : <SignUp />}
          </SignInAndSignUpContent>
        </SignInAndSignUpInner>
      </SignInAndSignUpContainer>
    );
  }
}

export default SignInAndSignUp;
