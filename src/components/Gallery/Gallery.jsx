import React, { useState, useEffect, useCallback } from 'react';
import { GalleryContainer, GalleryGrid, GalleryImage, Modal, ModalContent, CloseButton, NavigationButton } from './Gallery.st';
import Navbar from '../Navbar/Navbar'; 
import Footer from "../Footer/Footer";
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';
import image7 from '../../assets/7.jpg';
import image8 from '../../assets/8.jpg';
import image9 from '../../assets/9.jpg';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const galleryImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = useCallback((direction) => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      if (direction === 'next') {
        return (prevIndex + 1) % galleryImages.length;
      } else {
        return (prevIndex - 1 + galleryImages.length) % galleryImages.length;
      }
    });
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex === null) return;
      
      if (event.key === 'ArrowRight') {
        navigateImage('next');
      } else if (event.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, navigateImage, closeModal]);

  return (
    <GalleryContainer>
      <Navbar />
      <main>
        <h1>Gallery</h1>
        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={index} 
              bgUrl={image} 
              onClick={() => openModal(index)}
            />
          ))}
        </GalleryGrid>
      </main>
      <Footer />

      {selectedImageIndex !== null && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[selectedImageIndex]} 
              alt={`Full size ${selectedImageIndex + 1}`} 
            />
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <NavigationButton onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }} position="left">
              &#8249;
            </NavigationButton>
            <NavigationButton onClick={(e) => { e.stopPropagation(); navigateImage('next'); }} position="right">
              &#8250;
            </NavigationButton>
          </ModalContent>
        </Modal>
      )}
    </GalleryContainer>
  );
};

export default Gallery;