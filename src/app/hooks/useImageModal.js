import { useState } from "react";

export default function UseImageModal() {

    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openImageModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setImageModalOpen(true);
    };
    
    const closeImageModal = () => {
        setImageModalOpen(false);
        setSelectedImage("");
    };

    return {
        imageModalOpen, setImageModalOpen,
        selectedImage, setSelectedImage,
        openImageModal, closeImageModal
    };
}