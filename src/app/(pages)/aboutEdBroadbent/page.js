"use client"

import "/src/app/globals.css";
import "/src/app/css/pages/aboutEdBroadbent.css";
import "/src/app/css/pages/internal.css";
import "/src/app/css/imageModal.css"

import Link from "next/link";
import Image from "next/image";

import AudioPopupTab from "@/app/components/AudioPopupTab";
import Slider from "@/app/components/slider/Slider";
import ImageModal from "@/app/components/slider/imageModal";
import UseImageModal from "@/app/hooks/useImageModal";


export default function EdBroadbent() {


    const {
        imageModalOpen, setImageModalOpen,
        selectedImage, setSelectedImage,
        openImageModal, closeImageModal
    } = UseImageModal();
    
    const imageModalVariableList = {
        imageModalOpen, setImageModalOpen,
        selectedImage, setSelectedImage,
        openImageModal, closeImageModal
    };


    const imageData = [
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/aboutEdBroadbent/slider1.jpg",
            alt: "Ed Broadbent campaigning in 1971."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/aboutEdBroadbent/slider2.jpg",
            alt: "Ed Broadbent happy in a cockpit in the 1980s."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/aboutEdBroadbent/slider3.jpg",
            alt: "Ed Broadbent and Audrey Mclaughlin behind a podium with their hands raised together."
        },
        {
            src: "/Ed-Broadbent-Waterfront-Park/images/aboutEdBroadbent/slider4.jpg",
            alt: "Ed Broadbent and Governer General David Johnston gleefully shaking hands."
        }
    ];

    return (

        <main>
            <ImageModal imageModalVariableList={imageModalVariableList} />
            <section className="page-banner">
                <Image
                src="/Ed-Broadbent-Waterfront-Park/images/aboutEdBroadbent/hero-image.jpg"
                className="page-banner__image"
                objectFit="cover"
                fill={true}
                alt="Ed Broadbent talking at a podium."></Image>
            </section>
            <section className="page-section u-flex-column-align-center">
                <h1 className="page-section__title">ABOUT ED BROADBENT</h1>
                <p className="u-content-width">
                    Ed Broadbent was a Canadian political icon born and raised in Oshawa with long-standing service to our community and across our nation.
                </p>
                <Slider imageData={imageData} openImageModal={openImageModal} />
                <section className="u-content-width">
                    <div className="about-subsection">
                        <h2 className="about-subsection__title">1936 - 1966</h2>
                        <p className="about-subsection__p">Ed Broadbent was born in Oshawa in 1936 and raised in our city. After graduating first in his class in philosophy at the University of Toronto in 1959, he did postgraduate studies at the London School of Economics and obtained his doctorate in political science from the University of Toronto in 1966.</p>
                    </div>
                    <div className="about-subsection">
                        <h2 className="about-subsection__title">1968 - 1989</h2>
                        <p className="about-subsection__p">Mr. Broadbent was elected to Parliament as the NDP Member for Oshawa in 1968 and served as the MP until 1989, he was also Leader of the New Democratic Party.</p>
                    </div>
                    <div className="about-subsection">
                        <h2 className="about-subsection__title">1990 - 1996</h2>
                        <p className="about-subsection__p">Between 1979 and 1990, he was Vice-President of the Socialist International. From 1990 to 1996, he was the founding President of the International Centre for Human Rights and Democratic Development in Montreal.</p>
                    </div>
                    <div className="about-subsection">
                        <h2 className="about-subsection__title">2023</h2>
                        <p className="about-subsection__p">In June 2023, the City officially opened Ed Broadbent Waterfront Park. The naming of the Park honours the numerous contributions Mr. Broadbent made to public service, Canadians and especially his commitment and service to the residents, workers and businesses of Oshawa. <br/> <br/>
                            The Park features a Garden of Human Rights honouring Mr. Broadbent&apos;s dedication and extensive work as a champion and advocate for human rights. <br/> <br/>
                            During his time in Ottawa, Mr. Broadbent&apos;s focus was on Indigenous rights, women&apos;s equality, child poverty, ethics in government, and tax equality. <br/> <br/>
                            He was invested as a Member of the Privy Council (1982), Officer of the Order of Canada (1993), and Companion of the Order of Canada (2002).</p>
                    </div>
                </section>
                
                <Link href="/" className="back-to-home back-to-home-about button-color-primary" role="button">BACK TO HOME</Link>

            </section>
            <AudioPopupTab audioSrc="/Ed-Broadbent-Waterfront-Park/audio/about-ed-broadbent.mp3"/>

        </main>
        
    );
}
