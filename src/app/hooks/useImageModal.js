import { useState } from "react";

export default function UseImageModal() {

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({});

    const openImageModal = (imageSrc, imageAlt) => {
        setSelectedImage({src: imageSrc, alt: imageAlt});
        setIsImageModalOpen(true);
    };
    
    const closeImageModal = () => {
        setIsImageModalOpen(false);
        setSelectedImage({});
    };

    return {
        isImageModalOpen, setIsImageModalOpen,
        selectedImage, setSelectedImage,
        openImageModal, closeImageModal
    };
}