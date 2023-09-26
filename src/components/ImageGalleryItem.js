import React from 'react';

const ImageGalleryItem = ({ id, src, alt, onClick }) => {
  return (
    <li className="imageGalleryItem-image" onClick={onClick}>
      <img src={src} alt={alt} />
    </li>
  );
};
export default ImageGalleryItem;
