import { PropTypes } from 'prop-types';
import React from 'react';
import { MyImg, MyListItem } from './styled.module';

function ImageGalleryItem({ item: { id, webformatURL, tags }, handleId }) {
  return (
    <MyListItem
      className="gallery-item"
      onClick={() => {
        handleId(id);
      }}
    >
      <MyImg src={webformatURL} alt={tags} width="362" />
    </MyListItem>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),

  handleId: PropTypes.func.isRequired,
};

export default ImageGalleryItem;