import Image from "next/image";

export default function ImageModal({imageModalVariableList}) {

    const {isImageModalOpen, selectedImage, closeImageModal} = imageModalVariableList

    return (
        <>
            {isImageModalOpen && (
                <div className="image-modal" onClick={closeImageModal}>
                    <div className="image-modal__image-wrapper">
                        <button className="image-modal__button" onClick={closeImageModal}>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/close.svg" alt="Button to close the image modal." width={30} height={30} className="image-modal__button-image" />
                        </button>
                        <Image src={selectedImage.src} alt={selectedImage.alt} className="image-modal__image" width={0} height={0} sizes="80vw" />
                    </div>
                </div>
            )}
        </>

    );
}