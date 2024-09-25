import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  VehiclesContainer,
  VehiclesGrid,
  VehicleCard,
  SectionTitle,
  SectionImage,
  Modal,
  ModalContent,
  CloseButton,
  NavigationButton,
  Button
} from "./Vehicle.st";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";
import image7 from "../../assets/7.jpg";
import image8 from "../../assets/8.jpg";
import image9 from "../../assets/9.jpg";
import image10 from "../../assets/10.jpg";
import image11 from "../../assets/11.jpg";
import image13 from "../../assets/13.jpg";
import image14 from "../../assets/14.jpg";
import image15 from "../../assets/15.jpg";
import image16 from "../../assets/16.jpg";
import image17 from "../../assets/17.jpg";
import image18 from "../../assets/18.jpg";
import image19 from "../../assets/19.jpg";
import Kart from "../../assets/kartpic.png";
import Car from "../../assets/Car.png";

const Vehicle = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeSection, setActiveSection] = useState("");

  const allImages = {
    karts: [image1, image2, image3, image4, image5, image10, image13, image14],
    cars: [image2, image5, image6, image7, image8, image9, image11, image15, image16, image17, image18, image19],
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = useCallback(
    (direction) => {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        if (direction === "next") {
          return (prevIndex + 1) % galleryImages.length;
        } else {
          return (prevIndex - 1 + galleryImages.length) % galleryImages.length;
        }
      });
    },
    [galleryImages.length]
  );

  const handleSectionClick = (section) => {
    setGalleryImages(allImages[section]);
    setActiveSection(section);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex === null) return;

      if (event.key === "ArrowRight") {
        navigateImage("next");
      } else if (event.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, navigateImage]);

  return (
    <>
      <Navbar />
      <VehiclesContainer>
        <h1>Our Vehicles</h1>
        <SectionTitle>Phoenix</SectionTitle>
        <SectionImage
           img src={Kart}
          alt="Karts"
          onClick={() => handleSectionClick("karts")}
        />

        <SectionTitle>Akira</SectionTitle>
        <SectionImage
          img src={Car}
          alt="Cars"
          onClick={() => handleSectionClick("cars")}
        />
        

        {activeSection && (
          <VehiclesGrid>
            {galleryImages.map((image, index) => (
              <VehicleCard key={index} onClick={() => openModal(index)}>
                <img src={image} alt={`Vehicle ${index + 1}`} />
                {/* <h2>{`${activeSection === "karts" ? "Kart" : "Car"} ${index + 1}`}</h2> */}
              </VehicleCard>
            ))}
          </VehiclesGrid>
        )}
        <br></br>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button
          onClick={() => window.open("https://drive.google.com/file/d/1bp4H5J-ceW2Ll27SMFAT_yn8U3CJ_UsZ/view?usp=sharing", "_blank")}
        >
          Support Our Team
        </Button>
      </div>
      </VehiclesContainer>
      
      <Footer />

      {selectedImageIndex !== null && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImageIndex]}
              alt={`Full size ${selectedImageIndex + 1}`}
            />
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <NavigationButton
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              position="left"
            >
              &#8249;
            </NavigationButton>
            <NavigationButton
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              position="right"
            >
              &#8250;
            </NavigationButton>
          </ModalContent>
          
        </Modal>
      )}
    </>
  );
};

export default Vehicle;
