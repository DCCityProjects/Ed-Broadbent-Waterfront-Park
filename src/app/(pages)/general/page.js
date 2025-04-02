"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import "/src/app/globals.css";
import "/src/app/css/internal.css";
import "/src/app/css/general.css";
import "/src/app/css/slider.css";
import 'swiper/css';
import 'swiper/css/bundle';
import AudioPopupTab from "@/app/components/AudioPopupTab";

export default function General() {
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
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/close-landing.svg" alt="Close Modal" width={30} height={30} />
                        </button>
                        <Image src={selectedImage} alt="Expanded View" className="modal-image" width={0} height={0} sizes="80vw" />
                    </div>
                </div>
            )}

            <section className="page-banner">
                <Image src="/Ed-Broadbent-Waterfront-Park/images/general/hero-image.jpg" width={0} height={0} sizes="100vw" className="page-banner__image" alt="Featured Image General Information" />
            </section>

            <section className="page-section">
                <h1 className="page-section__title">GENERAL INFORMATION</h1>
                    <section>
                    <p className="u-content-width">
                        Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, 
                        the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system.
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
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/general/slider1.jpg" width={0} height={0} alt="slider 1" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/general/slider1.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/general/slider2.jpg" width={0} height={0} alt="slider 2" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/general/slider2.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/general/slider3.JPG" width={0} height={0} alt="slider 3" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/general/slider3.JPG")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/general/slider4.jpg" width={0} height={0} alt="slider 4" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/general/slider4.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/general/slider5.jpg" width={0} height={0} alt="slider 5" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/general/slider5.jpg")} ></Image>
                        </SwiperSlide>
                    </Swiper>
                    <p className="u-content-width">
                    The park is connected to the picturesque <span><a className="p-span-link" href="https://facilities.oshawa.ca/Home/Detail?CategoryIds=&FacilityTypeIds=&Keywords=bike&ScrollTo=google-map-trigger&CloseMap=true&Id=e164eaa4-63f7-4c0b-8091-c7f76cc02d1c" target="_blank" rel="noopener noreferrer">Joseph Kolodzie Oshawa Creek Bike Path</a></span>, 
                    the <span><a className="p-span-link" href="https://facilities.oshawa.ca/Home/Detail?CategoryIds=&FacilityTypeIds=71168&Keywords=waterfront%20trail&ScrollTo=google-map-trigger&CloseMap=true&Id=6085fddb-d81f-4328-a859-fc859dc28e3a"  target="_blank" rel="noopener noreferrer">Waterfront Trail</a></span>, and <span><a className="p-span-link" href="https://facilities.oshawa.ca/Home/Detail?CategoryIds=&FacilityTypeIds=&Keywords=lakeview%20park&ScrollTo=google-map-trigger&CloseMap=true&Id=ff127d8c-780d-46fe-ad52-36ecb9b2bee6" target="_blank" rel="noopener noreferrer">Lakeview Park</a></span>. The Larry Ladd Harbour Trail runs through the park and includes a new pedestrian bridge over the creek. The Trail is named in honour of local waterfront activist Larry Ladd. The park offers a great vantage point of the vibrant Port of Oshawa. The Park features an expansive Garden of Human Rights, a network of concrete and asphalt pathways as well as a stage with amphitheatre seating.
                    </p>
                </section>
            </section>

            <section className="u-content-width page-subsection">
                <h2 className="page-subsection__title">Park Amenities:</h2>
                <ul className="page-subsection__list">
                    <li><i className="amenity-icon amenity-accessibility"></i> Accessible</li>
                    <li><i className="amenity-icon amenity-bike"></i> Bike rack</li>
                    <li><i className="amenity-icon amenity-garden"></i> Garden</li>
                    <li><i className="amenity-icon amenity-parking"></i> Parking</li>
                    <li><i className="amenity-icon amenity-trail"></i> Recreational trail</li>
                </ul>
            </section>

            <section className="page-subsection u-content-width">
                <h2 className="page-subsection__title">Did you know?</h2>
                <ul className="did-you-know__list">
                    <li>Ed Broadbent Waterfront Park is a two-phase redevelopment project.</li>
                    <li>Elements of the old marina infrastructure are still present on the eastern half of the project site.</li>
                    <li>The western site was home to historical industrial uses, which resulted in poor soil conditions.</li>
                    <li>To improve the environmental condition of the site, there are mass plantings of native shrubs.</li>
                    <li>Both deciduous and coniferous trees are planted throughout the park.</li>
                </ul>
            </section>

            <Link href="/" className="back-to-home button-color-primary" role="button">BACK TO HOME</Link>
            <AudioPopupTab audioSrc="/Ed-Broadbent-Waterfront-Park/audio/general-information.mp3" />
        </main>
    );
}
