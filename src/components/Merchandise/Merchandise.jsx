import React, { useState } from 'react';
import {
  MerchandiseContainer,
  Header,
  Description,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductDescription,
  Modal,
  ModalContent,
  ModalHeading,
  ModalDescription,
  CloseButton,
  Button
} from './Merchandise.st.js';
import { products } from './data';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';

const Merchandise = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <MerchandiseContainer>
      <Navbar />
      <Header>Our Merchandise</Header>
      <Description>Explore our exclusive range of racing team merchandise!</Description>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage 
              src={product.image} 
              alt={product.name} 
              onClick={() => handleImageClick(product)} 
              style={{ cursor: 'pointer' }}
            />
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
          </ProductCard>
          
        ))}
        
      </ProductGrid>
      <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
        <Button
          onClick={() => window.open("https://drive.google.com/file/d/1bp4H5J-ceW2Ll27SMFAT_yn8U3CJ_UsZ/view?usp=sharing", "_blank")}
        >
          Support Our Team
        </Button>
      </div>

      {selectedProduct && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', borderRadius: '8px' }} />
            <ModalHeading>{selectedProduct.name}</ModalHeading>
            <ModalDescription>{selectedProduct.description}</ModalDescription>
          </ModalContent>
          
        </Modal>
        
      )}

      <Footer />
    </MerchandiseContainer>
  );
};

export default Merchandise;
