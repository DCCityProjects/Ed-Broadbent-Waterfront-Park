import Image from "next/image";

export default function ImageModal({imageModalVariableList}) {

    const {imageModalOpen, selectedImage, closeImageModal} = imageModalVariableList

    return (
        <>
            {imageModalOpen && (
                <div className="image-modal" onClick={closeImageModal}>
                    <div className="image-modal__image-wrapper">
                        <button className="image-modal__button" onClick={closeImageModal}>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/close.svg" alt="Close Modal" width={30} height={30} className="image-modal__button-image" />
                        </button>
                        <Image src={selectedImage} alt="Expanded View" className="image-modal__image" width={0} height={0} sizes="80vw" />
                    </div>
                </div>
            )}
        </>

    );
}