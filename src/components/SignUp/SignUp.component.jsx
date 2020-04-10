import React from 'react';
import { connect } from 'react-redux';
import InputWithLabel from '../InputWithLabel/InputWithLabel.component';
import CustomButton from '../CustomButton/CustomButton.component';
import { withRouter } from 'react-router-dom';
import { signUpStart } from '../../redux/auth/auth.actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = (event) => {
    const { signUpStart, history } = this.props;
    event.preventDefault();

    const { userName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('패스워드가 일치하지 않습니다.');
      return;
    }

    signUpStart({ userName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { userName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <InputWithLabel
            type='text'
            name='userName'
            value={userName}
            onChange={this.handleChange}
            placeholder='User Name'
            required
          ></InputWithLabel>
          <InputWithLabel
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
            required
          ></InputWithLabel>
          <InputWithLabel
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder='Password'
            required
          ></InputWithLabel>
          <InputWithLabel
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder='Confirm Password'
            required
          ></InputWithLabel>
          <CustomButton type='submit'>Create an account</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
