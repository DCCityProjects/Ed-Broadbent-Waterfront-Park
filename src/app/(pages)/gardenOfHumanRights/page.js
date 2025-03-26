"use client"

import "/src/app/globals.css";

import "/src/app/css/gardenOfHumanRights.css";
import "/src/app/css/internal.css";

import "/src/app/css/slider.css";
import 'swiper/css';
import 'swiper/css/bundle';

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Information from "/public/images/svgs/icons/information.svg"
import Ar from "/public/images/svgs/icons/ar.svg";
import AudioPopupTab from "@/app/components/AudioPopupTab";
import { useState } from "react";

export default function GardenOfHumanRights() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    
    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage("");
    };

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
            {/* Image Modal */}
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-container-general">
                        <button className="modal-close-button" onClick={closeModal}>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/close-landing.svg" alt="Close Modal" width={30} height={30} />
                        </button>
                        <Image src={selectedImage} alt="Expanded View" className="modal-image" width={0} height={0} sizes="80vw" />
                    </div>
                </div>
            )}

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
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={14}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation
                        modules={[Navigation]}
                        className="mySwiper slider-internal"
                    >
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider1.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 2" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider1.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider2.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 3" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider2.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider3.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 4" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider3.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider4.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 5" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider4.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider5.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 6" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/gardenOfHumanRights/slider5.jpg")} ></Image>
                        </SwiperSlide>
                    </Swiper>
                    <p className="u-content-width">A variety of seating in the garden makes this a unique place for quiet reflection and contemplation.</p>
                    <div className="hr-learn-more u-content-width">
                        <Information className="hr-learn-more__icon" />
                        <p className="hr-learn-more__description">Learn more about <span><a className="p-span" href="https://laws-lois.justice.gc.ca/eng/acts/h-6/page-1.html">The Canadian Human Rights Act.</a></span></p>

                    </div>
                </section>

                <Link href="/" className="back-to-home button-color-primary" role="button">BACK TO HOME</Link>
                <AudioPopupTab audioSrc="/audio/gardenOfHumanRights.mp3" />
            </section>

        </main>
    );
}