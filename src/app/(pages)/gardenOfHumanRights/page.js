"use client"

import "/src/app/globals.css";

import "/src/app/css/gardenOfHumanRights.css";
import "/src/app/css/internal.css";

import Image from "next/image";
import Link from "next/link";

import Information from "/public/images/svgs/icons/information.svg"
import AudioPopupTab from "@/app/components/AudioPopupTab";
import UseImageModal from "@/app/hooks/useImageModal";
import Slider from "@/app/components/slider/Slider";
import ImageModal from "@/app/components/slider/imageModal";

export default function GardenOfHumanRights() {

    const {
        imageModalOpen, setImageModalOpen,
        selectedImage, setSelectedImage,
        openImageModal, closeImageModal
    } = UseImageModal();
    
    const imageModalVariableList = {
        imageModalOpen, setImageModalOpen,
        selectedImage, setSelectedImage,
        openImageModal, closeImageModal
    }

    const imageData = [
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider1.jpg",
            alt: "Image 1 of slide"
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider2.jpg",
            alt: "Image 2 of slide"
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider3.jpg",
            alt: "Image 3 of slide"
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider4.jpg",
            alt: "Image 4 of slide"
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider5.jpg",
            alt: "Image 5 of slide"
        }
    ];

    const humanRights = [
        "Race",
        "Colour",
        "Ancestry",
        "Place of origin",
        "Religious beliefs",
        "Gender",
        "Physical disability",
        "Mental disability",
        "Age",
        "Marital status",
        "Family status",
        "Source of income",
        "Sexual orientation"
    ]

    return (
        <main>
            <ImageModal imageModalVariableList={imageModalVariableList} />
            <section className="page-banner">
                <Image src="/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/hero-image.jpg" width={0} height={0} sizes="100vw" className="page-banner__image" alt="main image 1"></Image>
            </section>
            <section className="page-section">
                <h1 className="page-section__title">Garden of Human Rights</h1>
                <section>
                    <p className="u-content-width">
                    The Garden of Human Rights is a prominent feature at Ed Broadbent Waterfront Park. The Garden features 13 garden beds representing the 13 prohibited grounds of discrimination within the Canadian Human Rights Act. <span className="p-span-bold">These include:</span>
                    </p>
                    <ol className="human-rights__list u-content-width">
                        {humanRights.map((right, index) => (
                            <li key={index} className="human-rights__item">{right}</li>
                        ))}
                    </ol>
                    <Slider imageData={imageData} openImageModal={openImageModal} />
                    <p className="u-content-width">A variety of seating in the garden makes this a unique place for quiet reflection and contemplation.</p>
                    <div className="hr-learn-more u-content-width">
                        <Information className="hr-learn-more__icon" />
                        <p className="hr-learn-more__description">Learn more about <span><a className="p-span-link" href="https://laws-lois.justice.gc.ca/eng/acts/h-6/page-1.html" target="_blank" rel="noopener noreferrer">The Canadian Human Rights Act.</a></span></p>

                    </div>
                </section>

                <Link href="/" className="back-to-home button-color-primary" role="button">BACK TO HOME</Link>
                <AudioPopupTab audioSrc="/Ed-Broadbent-Waterfront-Park/audio/garden-of-human-rights.mp3" />
            </section>

        </main>
    );
}