import React, { Component } from 'react';
import CustomModal from '../CustomModal/CustomModal.component';
import InputWithLabel from '../InputWithLabel/InputWithLabel.component';
import CustomButton from '../CustomButton/CustomButton.component';
import { CustomButtonWrapper } from '../CustomButton/CustomButton.styles';

class ModalWithInput extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { handleCreate } = this.props;
    handleCreate(this.state);

    this.setState({
      name: '',
    });
  };

  render() {
    const { title, open, handleClose } = this.props;
    return (
      <>
        {open && (
          <CustomModal title={title} handleClose={handleClose}>
            <form onSubmit={this.handleSubmit}>
              <InputWithLabel
                type='text'
                value={this.state.name}
                handleChange={this.handleChange}
              />
              <CustomButtonWrapper align='right'>
                <CustomButton type='submit'>생성하기</CustomButton>
              </CustomButtonWrapper>
            </form>
          </CustomModal>
        )}
      </>
    );
  }
}

export default ModalWithInput;
