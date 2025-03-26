"use client";

import "/src/app/globals.css";
import "/src/app/css/events.css";
import "/src/app/css/internal.css";
import "/src/app/css/slider.css";
import 'swiper/css';
import 'swiper/css/bundle';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import AudioPopupTab from "@/app/components/AudioPopupTab";

export default function Events() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <main>
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-container-events">
                        <button className="modal-close-button" onClick={closeModal}>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/close-landing.svg" alt="Close Modal" width={30} height={30} />
                        </button>
                        <Image src={selectedImage} alt="Expanded View" className="modal-image" width={800} height={600} />
                    </div>
                </div>
            )}
            <section className="page-banner">
                <Image src="/Ed-Broadbent-Waterfront-Park/images/events/hero-image.jpg" width={0} height={0} sizes="100vw" className="page-banner__image page-banner__image--events" alt="Featured Image Events" />
            </section>
            <section className="page-section">
                <h1 className="page-section__title">Events and Activities</h1>
                <p className="u-content-width">
                    Enjoy exciting events at Ed Broadbent Park! From community gatherings to live entertainment, there is something for everyone.
                </p>
                <section className="page-subsection u-content-width">
                    <h2 className="page-subsection__title--events">Events Happening in Oshawa</h2>
                    <p>To check out events happening at Ed Broadbent Waterfront Park or other City events, visit the City <span><a className="p-span" href="https://calendar.oshawa.ca/">Events Calendar</a></span>.</p>
                </section>
                <section className="page-subsection u-content-width">
                    <h2 className="page-subsection__title--events">Book an Event</h2>
                    <p>Interested in hosting an event at Ed Broadbent Waterfront Park? Learn more about <span><a className="p-span" href="https://www.oshawa.ca/en/parks-recreation-and-culture/host-an-event.aspx">Hosting an Event</a> and <a className="p-span" href="https://www.oshawa.ca/en/parks-recreation-and-culture/facilities-and-rentals.aspx">Facility Bookings</a></span>.</p>
                </section>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={14}
                    loop={true}
                    navigation
                    modules={[Navigation, Pagination]}
                    className="mySwiper slider-internal"
                >
                    <SwiperSlide>
                        <Image src="/Ed-Broadbent-Waterfront-Park/images/events/slider1.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="Image 1 of Slider Events" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/events/slider1.jpg")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/Ed-Broadbent-Waterfront-Park/images/events/slider2.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="Image 2 of Slider Events" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/events/slider2.jpg")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/Ed-Broadbent-Waterfront-Park/images/events/slider3.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="Image 3 of Slider Events" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/events/slider3.jpg")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/Ed-Broadbent-Waterfront-Park/images/events/slider4.JPG" width={0} height={0} sizes="33vw" className="slider__image" alt="Image 4 of Slider Events" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/events/slider4.JPG")} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/Ed-Broadbent-Waterfront-Park/images/events/slider5.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="Image 5 of Slider Events" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/events/slider5.jpg")} />
                    </SwiperSlide>
                </Swiper>
                <Link href="/" className="back-to-home back-to-home-about button-color-primary" role="button">BACK TO HOME</Link>
            </section>
            {/* Add the audio path here /audio/your-path.mp3 */}
            <AudioPopupTab audioSrc="/Ed-Broadbent-Waterfront-Park/audio/events.mp3" />
        </main>
    );
}
