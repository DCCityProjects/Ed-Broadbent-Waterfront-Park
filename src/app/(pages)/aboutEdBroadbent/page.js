"use client"

import "/src/app/globals.css";
import "/src/app/css/aboutEdBroadbent.css";
import "/src/app/css/internal.css";

import "/src/app/css/slider.css";
import 'swiper/css';
import 'swiper/css/bundle';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import AudioPopupTab from "@/app/components/AudioPopupTab";


export default function EdBroadbent() {
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
                    <div className="modal-container-edBroadbent">
                        <button className="modal-close-button" onClick={closeModal}>
                            <Image src="/nextjs-github-pages/images/svgs/icons/close-landing.svg" alt="Close Modal" width={30} height={30} />
                        </button>
                        <Image src={selectedImage} alt="Expanded View" className="modal-image" width={0} height={0} sizes="80vw" />
                    </div>
                </div>
            )}
            <section className="page-banner">
                <Image src="/nextjs-github-pages/images/aboutEdBroadbent/hero-image.jpg" width={0} height={0} sizes="100vw" className="page-banner__image" alt="Featured Image About EdBroadbent"></Image>
            </section>
            <section className="page-section u-flex-column-align-center">
                <h1 className="page-section__title">ABOUT ED BROADBENT</h1>
                <p className="u-content-width">
                    Ed Broadbent was a Canadian political icon born and raised in Oshawa with long-standing service to our community and across our nation.
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
                            <Image src="/nextjs-github-pages/images/aboutEdBroadbent/slider1.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="Image 1 of Slider About EdBroadbent" onClick={() => openModal("/nextjs-github-pages/images/aboutEdBroadbent/slider1.jpg")}></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/nextjs-github-pages/images/aboutEdBroadbent/slider2.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="Image 2 of Slider About EdBroadbent" onClick={() => openModal("/nextjs-github-pages/images/aboutEdBroadbent/slider2.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/nextjs-github-pages/images/aboutEdBroadbent/slider3.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="Image 3 of Slider About EdBroadbent" onClick={() => openModal("/nextjs-github-pages/images/aboutEdBroadbent/slider3.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/nextjs-github-pages/images/aboutEdBroadbent/slider4.jpg" width={0} height={0} sizes="33vw" className="slider__image" alt="Image 4 of Slider About EdBroadbent" onClick={() => openModal("/nextjs-github-pages/images/aboutEdBroadbent/slider4.jpg")} ></Image>
                        </SwiperSlide>
                </Swiper>
                <section className="u-content-width">
                    <div className="about-subsection">
                        <h2 className="about-subsection__title">1936 - 1966</h2>
                        <p className="about-subsection__p">Ed Broadbent was born in Oshawa in <span className="p-span">1936</span> and raised in our city. After graduating first in his class in philosophy at the University of Toronto in <span className="p-span">1959</span>, he did postgraduate studies at the London School of Economics and obtained his doctorate in political science from the University of Toronto in <span className="p-span">1966</span>.</p>
                    </div>
                    <div className="about-subsection">
                        <h2 className="about-subsection__title">1968 - 1989</h2>
                        <p className="about-subsection__p">Mr. Broadbent was elected to Parliament as the NDP Member for Oshawa in <span className="p-span">1968</span> and served as the MP until <span className="p-span">1989</span>. From <span className="p-span">1975</span> to <span className="p-span">1989</span>, he was also Leader of the New Democratic Party.</p>
                    </div>
                    <div className="about-subsection">
                        <h2 className="about-subsection__title">1990 - 1996</h2>
                        <p className="about-subsection__p">Between <span className="p-span">1979</span> and <span className="p-span">1990</span>, he was Vice-President of the Socialist International. From <span className="p-span">1990</span> to <span className="p-span">1996</span>, he was the founding President of the International Centre for Human Rights and Democratic Development in Montreal.</p>
                    </div>
                    <div className="about-subsection">
                        <h2 className="about-subsection__title">2023</h2>
                        <p className="about-subsection__p">In June <span className="p-span">2023</span>, the City officially opened Ed Broadbent Waterfront Park. The naming of the Park honours the numerous contributions Mr. Broadbent made to public service, Canadians and especially his commitment and service to the residents, workers and businesses of Oshawa. <br/> <br/>
                            The Park features a Garden of Human Rights honouring Mr. Broadbent’s dedication and extensive work as a champion and advocate for human rights. <br/> <br/>
                            During his time in Ottawa, Mr. Broadbent’s focus was on Indigenous rights, women’s equality, child poverty, ethics in government, and tax equality. <br/> <br/>
                            He was invested as a Member of the Privy Council (<span className="p-span">1982</span>), Officer of the Order of Canada (<span className="p-span">1993</span>), and Companion of the Order of Canada (<span className="p-span">2002</span>).</p>
                    </div>



                </section>
                
                <Link href="/" className="back-to-home back-to-home-about button-color-primary" role="button">BACK TO HOME</Link>

            </section>
            <AudioPopupTab audioSrc="/Ed-Broadbent-Waterfront-Park/audio/about-ed-broadbent.mp3"/>

        </main>
        
    );
}
