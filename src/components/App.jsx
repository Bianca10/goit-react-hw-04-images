import React, { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { fetchImages } from './api';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchImages(query, page);
      const { hits, totalHits } = data;

      setImages(prevImages => ({
        images: [...prevImages.images, ...hits],
        loadMore: page < Math.ceil(totalHits / 12),
      }));
    };

    if (page !== 1) {
      fetch();
    }
  }, [page, query]);

  const handleSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages({ images: [], loadMore: true });
    fetchImages(newQuery, 1).then(data => {
      const { hits, totalHits } = data;
      setImages({ images: hits, loadMore: totalHits > 12 });
    });
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = imageUrl => {
    setShowModal(true);
    setModalImageUrl(imageUrl);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImageUrl('');
  };

  return (
    <div className="app">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images.images} onImageClick={handleImageClick} />
      {images.loadMore && <Button onClick={handleLoadMore} />}
      <Modal
        isOpen={showModal}
        imageUrl={modalImageUrl}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
