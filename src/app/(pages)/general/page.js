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
                            <Image src="/images/svgs/icons/close-landing.svg" alt="Close Modal" width={30} height={30} />
                        </button>
                        <Image src={selectedImage} alt="Expanded View" className="modal-image" width={0} height={0} sizes="80vw" />
                    </div>
                </div>
            )}

            <section className="page-banner">
                <Image src="/images/general/hero-image.jpg" width={0} height={0} sizes="100vw" className="page-banner__image" alt="Featured Image General Information" />
            </section>

            <section className="page-section">
                <h1 className="page-section__title">GENERAL INFORMATION</h1>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={14}
                    loop={true}
                    navigation
                    modules={[Navigation, Pagination]}
                    className="mySwiper slider-internal"
                >
                    {/* Individually Defined Images */}
                    <SwiperSlide>
                        <Image 
                            src="/images/general/slider1.jpg"
                            width={0}
                            height={0}
                            sizes="33vw"
                            className="slider__image"
                            alt="Image 1 of Slider General"
                            onClick={() => openModal("/images/general/slider1.jpg")}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image 
                            src="/images/general/slider2.jpg"
                            width={0}
                            height={0}
                            sizes="33vw"
                            className="slider__image"
                            alt="Image 2 of Slider General"
                            onClick={() => openModal("/images/general/slider2.jpg")}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image 
                            src="/images/general/slider3.jpg"
                            width={0}
                            height={0}
                            sizes="33vw"
                            className="slider__image"
                            alt="Image 3 of Slider General"
                            onClick={() => openModal("/images/general/slider3.jpg")}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image 
                            src="/images/general/slider4.jpg"
                            width={0}
                            height={0}
                            sizes="33vw"
                            className="slider__image"
                            alt="Image 4 of Slider General"
                            onClick={() => openModal("/images/general/slider4.jpg")}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image 
                            src="/images/general/slider5.jpg"
                            width={0}
                            height={0}
                            sizes="33vw"
                            className="slider__image"
                            alt="Image 5 of Slider General"
                            onClick={() => openModal("/images/general/slider5.jpg")}
                        />
                    </SwiperSlide>
                </Swiper>

                <p className="u-content-width">
                    The park is connected to the picturesque <span><a className="p-span" href="https://facilities.oshawa.ca/Home/Detail?CategoryIds=&FacilityTypeIds=&Keywords=bike&ScrollTo=google-map-trigger&CloseMap=true&Id=e164eaa4-63f7-4c0b-8091-c7f76cc02d1c">Joseph Kolodzie Oshawa Creek Bike Path</a></span>, 
                    the <span><a className="p-span" href="https://facilities.oshawa.ca/Home/Detail?CategoryIds=&FacilityTypeIds=71168&Keywords=waterfront%20trail&ScrollTo=google-map-trigger&CloseMap=true&Id=6085fddb-d81f-4328-a859-fc859dc28e3a">Waterfront Trail</a></span>, and <span><a className="p-span" href="https://facilities.oshawa.ca/Home/Detail?CategoryIds=&FacilityTypeIds=&Keywords=lakeview%20park&ScrollTo=google-map-trigger&CloseMap=true&Id=ff127d8c-780d-46fe-ad52-36ecb9b2bee6">Lakeview Park</a></span>. 
                    The Larry Ladd Harbour Trail runs through the park and includes a new pedestrian bridge over the creek.
                </p>
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
        </main>
    );
}
