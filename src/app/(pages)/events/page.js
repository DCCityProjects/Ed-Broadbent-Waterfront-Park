"use client";

import "/src/app/globals.css";
import "/src/app/css/pages/internal.css";
import "/src/app/css/imageModal.css"


import Image from "next/image";
import Link from "next/link";

import AudioPopupTab from "@/app/components/AudioPopupTab";
import UseImageModal from "@/app/hooks/useImageModal";
import ImageModal from "@/app/components/slider/imageModal";
import Slider from "@/app/components/slider/Slider";

export default function Events() {

    const {
        isImageModalOpen, setIsImageModalOpen,
        selectedImage, setSelectedImage,
        openImageModal, closeImageModal
    } = UseImageModal();
    
    const imageModalVariableList = {
        isImageModalOpen, setIsImageModalOpen,
        selectedImage, setSelectedImage,
        openImageModal, closeImageModal
    }

    const imageData = [
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/events/slider1.jpg",
            alt: "An indigenous performer in full regalia."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/events/slider2.jpg",
            alt: "Two people on stage doing a performance with large rings."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/events/slider3.jpg",
            alt: "A child smiling while holding percussion instruments."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/events/slider4.JPG",
            alt: "Two children (left) and one adult performing in full regalia."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/events/slider5.jpg",
            alt: "Five indigenous people smiling in traditional regalia."
        },
    ]

    return (
        <main>
            <ImageModal imageModalVariableList={imageModalVariableList} />
            <section className="page-banner">
                <Image
                src="/Ed-Broadbent-Waterfront-Park/images/events/hero-image.jpg"
                className="page-banner__image page-banner__image--events"
                style={{objectFit: "cover"}}
                fill={true}
                priority={true}
                alt="An indigenous performer in full regalia." />
            </section>
            <section className="page-section">
                <h1 className="page-section__title mb-8">Events and Activities</h1>
                <p className="u-content-width">
                    Enjoy exciting events at Ed Broadbent Park! From community gatherings to live entertainment, there is something for everyone.
                </p>
                <section className="page-subsection u-content-width">
                    <h2 className="page-subsection__title mb-8">Events Happening in Oshawa</h2>
                    <p>To check out events happening at Ed Broadbent Waterfront Park or other City events, visit the City <span><a className="p-span-link" href="https://calendar.oshawa.ca/" target="_blank" rel="noopener noreferrer">Events Calendar</a></span>.</p>
                </section>
                <section className="page-subsection u-content-width">
                    <h2 className="page-subsection__title mb-8">Book an Event</h2>
                    <p>Interested in hosting an event at Ed Broadbent Waterfront Park? Learn more about <span><a className="p-span-link" href="https://www.oshawa.ca/en/parks-recreation-and-culture/host-an-event.aspx" target="_blank" rel="noopener noreferrer" >Hosting an Event</a> and <a className="p-span-link" href="https://www.oshawa.ca/en/parks-recreation-and-culture/facilities-and-rentals.aspx" target="_blank" rel="noopener noreferrer">Facility Bookings</a></span>.</p>
                </section>
                <Slider imageData={imageData} openImageModal={openImageModal} />
                <Link href="/" className="back-to-home back-to-home-about button-color-primary" role="button">BACK TO HOME</Link>
            </section>
            {/* Add the audio path here /audio/your-path.mp3 */}
            <AudioPopupTab audioSrc="/Ed-Broadbent-Waterfront-Park/audio/events.mp3" />
        </main>
    );
}
