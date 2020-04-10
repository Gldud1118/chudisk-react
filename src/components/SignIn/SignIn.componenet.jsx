import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import { withRouter } from 'react-router-dom';
import { signInStart } from '../../redux/auth/auth.actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { signInStart, history } = this.props;
    console.log(history);
    const { email, password } = this.state;
    signInStart({ email, password });
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className='center'>
        <form onSubmit={this.handleSubmit}>
          <InputWithLabel
            className='form-item'
            placeholder='Email'
            value={email}
            name='email'
            type='email'
            onChange={this.handleChange}
          />
          <InputWithLabel
            className='form-item'
            placeholder='Password'
            value={password}
            name='password'
            type='password'
            onChange={this.handleChange}
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  signInStart: signInStart,
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
