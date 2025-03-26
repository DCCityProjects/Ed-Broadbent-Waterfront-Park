"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import "/src/app/globals.css";
import "/src/app/css/internal.css";
import "/src/app/css/orangeGarden.css";
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
                <Image src="/Ed-Broadbent-Waterfront-Park/images/orangeGarden/hero-image.jpg" width={0} height={0} sizes="100vw" className="page-banner__image" alt="Featured Image Orange Garden Information" />
            </section>

            <section className="page-section">
                <h1 className="page-section__title">ORANGE GARDEN</h1>
                    <section>
                    <p className="u-content-width">
                        The Orange Garden, built in June 2024, received a Ground Breaking and Round Dance Ceremony by Michi Saagiig Elder Dorothy Taylor who conducted this Indigenous tradition prior to the garden being planted. This milestone was tributed with a Round Dance to honour Indigenous communities' legacy of resilience and strength. A Round Dance is a sacred tradition that celebrates unity and interconnectedness that is an open opportunity for Indigenous and non-Indigenous peoples to come together.
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
                        className="mySwiper slider-internal--orange-garden"
                    >
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider1.jpg" width={0} height={0} alt="slider 1" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider1.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider2.JPG" width={0} height={0} alt="slider 2" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider2.JPG")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider3.JPG" width={0} height={0} alt="slider 3" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider3.JPG")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider1.jpg" width={0} height={0} alt="slider 1" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider1.jpg")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider2.JPG" width={0} height={0} alt="slider 2" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider2.JPG")} ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider3.JPG" width={0} height={0} alt="slider 3" sizes="33vw" className="slider__image" onClick={() => openModal("/Ed-Broadbent-Waterfront-Park/images/orangeGarden/slider3.JPG")} ></Image>
                        </SwiperSlide>

                    </Swiper>
                    <p className="u-content-width">
                    The Garden symbolizes the City’s commitment made on June 20, 2022 by the Oshawa City council to implement the Truth and Reconciliation (T.R.C) 94 Calls to Action and the United Nations Declaration on the Rights of Indigenous Peoples (U.N.D.R.I.P) as a framework to move forward reconciliation. To learn more about the commitments made by the City, please visit the:
                    </p>
                </section>
            </section>

            <section className="page-subsection u-content-width">
                <ul className="orange-garden-list">
                    <li>
                        <a href="https://www.oshawa.ca/en/city-hall/truth-and-reconciliation.aspx" className="orange-garden-list__link">
                            City of Oshawa, Truth and Reconciliation page.
                        </a>
                    </li>
                    <li>
                        <a href="https://www.oshawa.ca/en/city-hall/resources/Documents/CNCL-22-48_TR-Report.pdf" className="orange-garden-list__link">
                            Response to the Truth and Reconciliation (TRC) Calls to Action and United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP)
                        </a>
                    </li>
                </ul>
            </section>
            <p className="u-content-width">
            The Orange Garden is a designated space meant for community to re flect, learn and commemorate the legacy of harms caused towards the Indigenous stewards of Turtle Island (North America) to promote healing, equity and inclusion for all.
            </p>
            <ol className="custom-list u-content-width">
                <li className="custom-list-item">
                    This area of Oshawa was an important carrying route for First Nations. The Oshawa Creek was much larger than it is today and groups would congregate here every spring and fall to fish.
                </li>
                <li className="custom-list-item">
                    The Oshawa Creek trail follows multiple branches of creeks that connect to Lake Ontario, one branch went northward by Harmony Creek and the other by the Oshawa Creek. Canoes would have been used as far up the creek as they could go before portaging.
                </li>
                <li className="custom-list-item">
                    This area inspired Oshawa’s namesake, stemming from the Anishinaabe word Aazhawe, which loosely translates to, “The Crossing Place”. The Anishinaabeg of this territory had always referred to the city as Aazhawe.
                </li>
                <li className="custom-list-item">
                    There are numerous archaeological sites found along the carrying place. Two of these sites are located in Oshawa; the Grandview Site and the MacLeod Site.
                </li>
                <li className="custom-list-item">
                    <div className="custom-list-content">
                        <span className="custom-text">The actual </span>
                        <a href="https://oshawamuseum.wordpress.com/2018/06/15/the-scugog-carrying-place/" className="custom-link">Scugog Carrying Place</a>
                        <span className="custom-text"> route followed what is now Simcoe Street in Oshawa and Port Perry and connected Lake Scugog and Simcoe with the Kawartha Lakes and Lake Ontario. </span>
                        <a href="https://www.communitystories.ca/v2/ship-shore-oshawa-ontario_bateaux-jusqu-au-rivage/story/before-the-harbour-scugog-carrying-place/#:~:text=The%20Scugog%20Carrying%20Place%20Trail%20was%20considered%20one%20of%20four,the%20shore%20of%20Lake%20Scugog." className="custom-link">Before the Harbour Place: The Scugog Carrying Place Trail</a>.
                    </div>
                </li>
            </ol>

            <Link href="/" className="back-to-home button-color-primary" role="button">BACK TO HOME</Link>
            <AudioPopupTab audioSrc="/audio/orange-garden.mp3" />
        </main>
    );
}
