import React, { Component } from 'react';
import { fetchData } from 'services/API';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import SearchBar from './SearchBar/SearchBar';
import { MyBtn } from './styled.module';

export default class App extends Component {
  state = {
    data: [],
    isData: true,
    inputText: '',
    page: 1,
    loader: false,
    largeImageSrc: '',
    isModalOpen: false,
  };

  async componentDidMount() {
    this.setState({ loader: true });
    const {
      data: { hits },
    } = await fetchData(this.state.page);

    this.checkData(hits);

    this.setState({ data: hits, loader: false });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.inputText !== this.state.inputText
    ) {
      this.setState({ loader: true });
      const {
        data: { hits },
      } = await fetchData(this.state.page, this.state.inputText);
      this.setState({ loader: false });

      this.checkData(hits);

      if (prevState.inputText !== this.state.inputText) {
        return this.setState({ data: hits });
      }

      return this.setState(state => ({ data: state.data.concat(hits) }));
    }
  }

  handleSubmit = (e, text) => {
    e.preventDefault();

    this.setState({
      inputText: text,
      page: 1,
    });
  };

  handleClick = () =>
    this.setState(prevState => {
      const oldPage = prevState.page;

      return { page: oldPage + 1 };
    });

  handleModalOpen = id => {
    const data = this.state.data.filter(item => item.id === id);

    if (!data || data.length === 0) {
      return;
    }

    const { largeImageURL, tags } = data[0];

    this.setState({
      largeImageSrc: { largeImageURL, tags },
      isModalOpen: true,
    });
  };

  handleModalClose = e => {
    this.setState({ isModalOpen: false });
  };

  checkData = data => {
    return data.length >= 0 && data.length < 11
      ? this.setState({ isData: false })
      : this.setState({ isData: true });
  };

  render() {
    return (
      <div>
        <SearchBar
          onSubmit={this.handleSubmit}
          inputText={this.state.inputText}
        />
        <ImageGallery
          dataImage={this.state.data}
          handleId={this.handleModalOpen}
        />

        {this.state.loader && <Loader />}

        {this.state.isData && (
          <MyBtn type="button" onClick={this.handleClick}>
            Load more
          </MyBtn>
        )}

        {this.state.isModalOpen && (
          <Modal
            data={this.state.largeImageSrc}
            close={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}