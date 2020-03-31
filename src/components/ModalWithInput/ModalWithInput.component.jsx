import React, { Component } from 'react';
import CustomModal from '../CustomModal/CustomModal.component';
import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

class ModalWithInput extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { handleCreate } = this.props;
    handleCreate(this.state);

    this.setState({
      name: ''
    });
  };

  render() {
    const { title, open, handleClose } = this.props;
    return (
      <>
        {open && (
          <CustomModal title={title} handleClose={handleClose}>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type='text'
                value={this.state.name}
                handleChange={this.handleChange}
              />
              <div>
                <CustomButton type='submit'>생성하기</CustomButton>
              </div>
            </form>
          </CustomModal>
        )}
      </>
    );
  }
}

export default ModalWithInput;
