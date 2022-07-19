import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { PropTypes } from 'prop-types';
import React from 'react';
import { MyList } from './styled.module';

function ImageGallery({ dataImage, handleId }) {
  return (
    <MyList>
      {dataImage.map(item => (
        <ImageGalleryItem key={item.id} item={item} handleId={handleId} />
      ))}
    </MyList>
  );
}

ImageGallery.propTypes = {
  dataImage: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleId: PropTypes.func.isRequired,
};

export default ImageGallery;