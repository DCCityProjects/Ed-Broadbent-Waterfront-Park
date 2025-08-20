"use client"

import "/src/app/globals.css";
import "/src/app/css/pages/internal.css";
import "/src/app/css/imageModal.css"


import Image from "next/image";
import Link from "next/link";

import AudioPopupTab from "@/app/components/AudioPopupTab";
import UseImageModal from "@/app/hooks/useImageModal";
import ImageModal from "@/app/components/slider/imageModal";
import Slider from "@/app/components/slider/Slider";

export default function AmphitheatreAndStage() {

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
            src: "/Ed-Broadbent-Waterfront-Park/images/amphitheatreAndStage/slider1.jpg",
            alt: "A crowd of people is sitting on chairs in the amphitheatre watching an event."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/amphitheatreAndStage/slider2.jpg",
            alt: "Indigenous people posing for a photo with some in traditional regalia."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/amphitheatreAndStage/slider3.jpg",
            alt: "A speaker talking on stage."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/amphitheatreAndStage/slider4.jpg",
            alt: "Two people on stage doing a performance with large rings."
        },
                {
            src: "/Ed-Broadbent-Waterfront-Park/images/amphitheatreAndStage/slider5.jpg",
            alt: "A view of the stage from the east side."
        },
                {
            src: "/Ed-Broadbent-Waterfront-Park/images/amphitheatreAndStage/slider6.jpg",
            alt: "A view of the stage and skyline from the top of the amphitheatre."
        }
    ];

    return (
        <main>
            <ImageModal imageModalVariableList={imageModalVariableList} />

            <section className="page-banner">
                <Image src="/Ed-Broadbent-Waterfront-Park/images/amphitheatreAndStage/hero-image.jpg" width={0} height={0} sizes="100vw" className="page-banner__image" alt="main image 1"></Image>
            </section>
            <section className="page-section">
                <h1 className="page-section__title">Amphitheatre and Stage</h1>
                <section>
                    <p className="u-content-width">
                        The stage is centrally located in the park to provide a location for performances and community gatherings. Surrounded by integrated amphitheatre seating, the stage is elevated and sheltered creating a perfect space for musical performances, open-air theatre, drum socials, City events and community gatherings.
                    </p>
                    <Slider imageData={imageData} openImageModal={openImageModal} />
                </section>

                <section className="page-subsection u-content-width">
                    <h2 className="page-subsection__title mb-8">Book an Event</h2>
                    <p>Interested in hosting an event at Ed Broadbent Waterfront Park? Learn more about <span><a className="p-span-link" href="https://www.oshawa.ca/en/parks-recreation-and-culture/host-an-event.aspx" target="_blank" rel="noopener noreferrer">Hosting an Event</a></span> and <span><a className="p-span-link" href="https://www.oshawa.ca/en/parks-recreation-and-culture/facilities-and-rentals.aspx" target="_blank" rel="noopener noreferrer">Facility Bookings.</a></span></p>
                </section>
                <section className="page-subsection u-content-width">
                    <h2 className="page-subsection__title mb-8">Events Happening in Oshawa</h2>
                    <p>To check out events happening at Ed Broadbent Waterfront Park or other City events, visit the City <span><a className="p-span-link" href="https://calendar.oshawa.ca/" target="_blank" rel="noopener noreferrer">Events Calendar.</a></span></p>
                </section>

                <Link href="/" className="back-to-home button-color-primary" role="button">BACK TO HOME</Link>
                <AudioPopupTab audioSrc="/Ed-Broadbent-Waterfront-Park/audio/amphitheatre-and-stage.mp3" />
            </section>

        </main>
    );
}