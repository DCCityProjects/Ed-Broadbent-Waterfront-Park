"use client"

import "/src/app/globals.css";

// import "/src/app/css/events.css";
import "/src/app/css/internal.css";

import "/src/app/css/slider.css";
import 'swiper/css';
import 'swiper/css/bundle';

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import AudioPopupTab from "@/app/components/AudioPopupTab";
import { useState } from "react";

export default function AmphitheatreAndStage() {
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

    return (
        <main>
            {/* Image Modal */}
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-container-general">
                        <button className="modal-close-button" onClick={closeModal}>
                            <Image src="/nextjs-github-pages/images/svgs/icons/close-landing.svg" alt="Close Modal" width={30} height={30} />
                        </button>
                        <Image src={selectedImage} alt="Expanded View" className="modal-image" width={0} height={0} sizes="80vw" />
                    </div>
                </div>
            )}

            <section className="page-banner">
                <Image src="/nextjs-github-pages/images/amphitheatreAndStage/hero-image.jpg" width={0} height={0} sizes="100vw" className="page-banner__image" alt="main image 1"></Image>
            </section>
            <section className="page-section">
                <h1 className="page-section__title">Amphitheatre and Stage</h1>
                <section>
                    <p className="u-content-width">
                        The stage is centrally located in the park to provide a location for performances and community gatherings. Surrounded by integrated amphitheatre seating, the stage is elevated and sheltered creating a perfect space for musical performances, open-air theatre, drum socials, City events and community gatherings.
                    </p>
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
                            <Image src="/nextjs-github-pages/images/amphitheatreAndStage/slider1.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 2" onClick={() => openModal("/nextjs-github-pages/images/amphitheatreAndStage/slider1.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/nextjs-github-pages/images/amphitheatreAndStage/slider2.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 3" onClick={() => openModal("/nextjs-github-pages/images/amphitheatreAndStage/slider2.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/nextjs-github-pages/images/amphitheatreAndStage/slider3.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 4" onClick={() => openModal("/nextjs-github-pages/images/amphitheatreAndStage/slider3.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/nextjs-github-pages/images/amphitheatreAndStage/slider4.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 5" onClick={() => openModal("/nextjs-github-pages/images/amphitheatreAndStage/slider4.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/nextjs-github-pages/images/amphitheatreAndStage/slider5.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 6" onClick={() => openModal("/nextjs-github-pages/images/amphitheatreAndStage/slider5.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/nextjs-github-pages/images/amphitheatreAndStage/slider6.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="image 7" onClick={() => openModal("/nextjs-github-pages/images/amphitheatreAndStage/slider6.jpg")} ></Image>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="page-subsection u-content-width">
                    <h2 className="page-subsection__title--events">Book an Event</h2>
                    <p>Interested in hosting an event at Ed Broadbent Waterfront Park? Learn more about <span><a className="p-span" href="https://www.oshawa.ca/en/parks-recreation-and-culture/host-an-event.aspx">Hosting an Event</a></span> and <span><a className="p-span" href="https://www.oshawa.ca/en/parks-recreation-and-culture/facilities-and-rentals.aspx">Facility Bookings.</a></span></p>
                </section>
                <section className="page-subsection u-content-width">
                    <h2 className="page-subsection__title--events">Events Happening in Oshawa</h2>
                    <p>To check out events happening at Ed Broadbent Waterfront Park or other City events, visit the City <span><a className="p-span" href="https://calendar.oshawa.ca/">Events Calendar.</a></span></p>
                </section>

                <Link href="/" className="back-to-home button-color-primary" role="button">BACK TO HOME</Link>
                <AudioPopupTab audioSrc="/audio/amphitheatre-new.mp3" />
            </section>

        </main>
    );
}