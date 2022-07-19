import { BackDrop, ModalWindow } from './styled.module';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.close();
    }
  };

  handleBackdropclick = e => {
    if (e.target === e.currentTarget) {
      this.props.close();
    }
  };

  render() {
    return (
      <BackDrop className="overlay" onClick={this.handleBackdropclick}>
        <ModalWindow className="modal">
          <img
            src={this.props.data.largeImageURL}
            alt={this.props.data.tags}
            width="1000"
          />
        </ModalWindow>
      </BackDrop>
    );
  }
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};