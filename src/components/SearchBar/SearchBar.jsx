import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { MyBtn, MyForm, MyInput, MySearchBar } from './styled.module';

import iconFind from '../../image/search.svg';

export default class SearchBar extends Component {
  state = {
    text: '',
  };

  onInput = e => {
    this.setState({ text: e.currentTarget.value });
  };

  render() {
    return (
      <MySearchBar className="searchbar">
        <MyForm
          className="form"
          onSubmit={e => {
            this.props.onSubmit(e, this.state.text.trim());
          }}
        >
          <MyBtn type="submit" className="button">
            <img src={iconFind} alt="" width="32" />
          </MyBtn>

          <MyInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInput}
            value={this.state.text}
          />
        </MyForm>
      </MySearchBar>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};