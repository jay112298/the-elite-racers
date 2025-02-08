import React, { useState, useEffect, useCallback } from "react";
import {
  GalleryContainer,
  FoldersContainer,
  Folder,
  FolderTab,
  GallerySection,
  GalleryGrid,
  GalleryImage,
  Modal,
  ModalContent,
  CloseButton,
  NavigationButton,
} from "./Gallery.st";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FolderOpen } from "lucide-react";

// Import past events images
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";
import image7 from "../../assets/7.jpg";
import image8 from "../../assets/8.jpg";
import image9 from "../../assets/9.jpg";

// Import auto expo images
import image31 from "../../assets/31.jpg";
import image32 from "../../assets/32.jpg";
import image33 from "../../assets/33.jpg";
import image34 from "../../assets/34.jpg";
import image35 from "../../assets/35.jpg";
import image36 from "../../assets/36.jpg";
import image37 from "../../assets/37.jpg";
import image38 from "../../assets/38.jpg";

// Import forum installation images
import imageI1 from "../../assets/i1.jpg";
import imageI2 from "../../assets/i2.jpg";
import imageI3 from "../../assets/i3.jpg";
import imageI4 from "../../assets/i4.jpg";
import imageI5 from "../../assets/i5.jpg";
import imageI6 from "../../assets/i6.jpg";
import imageI7 from "../../assets/i7.jpg";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [activeFolder, setActiveFolder] = useState(null);

  const galleryData = {
    pastEvents: {
      title: "Past Events",
      description: "Memories from our previous gatherings",
      images: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
      ],
    },
    autoExpo: {
      title: "Auto Expo 2024",
      description: "Highlights from the automotive exhibition",
      images: [
        image31,
        image32,
        image33,
        image34,
        image35,
        image36,
        image37,
        image38,
      ],
    },
    forumInstallation: {
      title: "Forum Installation 2025",
      description: "Documentation of our forum setup",
      images: [imageI1, imageI2, imageI3, imageI4, imageI5, imageI6, imageI7],
    },
  };

  const toggleFolder = (sectionKey) => {
    if (activeFolder === sectionKey) {
      setActiveFolder(null);
    } else {
      setActiveFolder(sectionKey);
    }
  };

  const openModal = (sectionKey, index) => {
    setSelectedSection(sectionKey);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedSection(null);
    setSelectedImageIndex(null);
  };

  const navigateImage = useCallback(
    (direction) => {
      if (!selectedSection) return;

      const currentImages = galleryData[selectedSection].images;
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        if (direction === "next") {
          return (prevIndex + 1) % currentImages.length;
        } else {
          return (prevIndex - 1 + currentImages.length) % currentImages.length;
        }
      });
    },
    [selectedSection, galleryData]
  );

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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, navigateImage]);

  return (
    <GalleryContainer>
      <Navbar />
      <main>
        <h1>Photo Gallery</h1>
        <FoldersContainer>
          {Object.entries(galleryData).map(([sectionKey, section]) => (
            <div key={sectionKey}>
              <Folder
                onClick={() => toggleFolder(sectionKey)}
                isActive={activeFolder === sectionKey}
              >
                <FolderTab>
                  <FolderOpen size={24} />
                  <div>
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </FolderTab>
              </Folder>

              {activeFolder === sectionKey && (
                <GallerySection>
                  <GalleryGrid>
                    {section.images.map((image, index) => (
                      <GalleryImage
                        key={index}
                        bgUrl={image}
                        onClick={() => openModal(sectionKey, index)}
                      />
                    ))}
                  </GalleryGrid>
                </GallerySection>
              )}
            </div>
          ))}
        </FoldersContainer>
      </main>
      <Footer />

      {selectedSection && selectedImageIndex !== null && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryData[selectedSection].images[selectedImageIndex]}
              alt={`${galleryData[selectedSection].title} ${
                selectedImageIndex + 1
              }`}
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
    </GalleryContainer>
  );
};

export default Gallery;
