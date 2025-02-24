"use client"

import "/src/app/globals.css";

import "/src/app/css/internal.css";
import "/src/app/css/general.css";
import "/src/app/css/slider.css";
import 'swiper/css';
import 'swiper/css/bundle';


import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';



export default function General() {


    return (

        <main>
            <section className="page-banner">
                <Image src="/images/general/hero-image.jpg" width={0} height={0} sizes="100vw" className="page-banner__image"></Image>
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
                            <Image src="/images/general/slider1.jpg" width={0} height={0} sizes="33vw" className="slider__image" ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/general/slider2.jpg" width={0} height={0} sizes="33vw" className="slider__image" ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/general/slider3.jpg" width={0} height={0} sizes="33vw" className="slider__image" ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/general/slider4.jpg" width={0} height={0} sizes="33vw" className="slider__image" ></Image>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/images/general/slider5.jpg" width={0} height={0} sizes="33vw" className="slider__image" ></Image>
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className="slider slider-internal">
                        <img src="/images/slider1.jpg" className="page-slider__image"></img>
                        <img src="/images/slider2.JPG" className="page-slider__image"></img>
                        <img src="/images/slider3.jpg" className="page-slider__image"></img>
                        <img src="/images/slider4.jpg" className="page-slider__image"></img>
                    </div> */}
                    <p className="u-content-width">
                        The park is connected to the picturesque <span><a className="p-span" href="https://facilities.oshawa.ca/Home/Detail?CategoryIds=&FacilityTypeIds=&Keywords=bike&ScrollTo=google-map-trigger&CloseMap=true&Id=e164eaa4-63f7-4c0b-8091-c7f76cc02d1c">Joseph Kolodzie Oshawa Creek Bike Path</a></span>, 
                        the <span><a className="p-span" href="https://facilities.oshawa.ca/Home/Detail?CategoryIds=&FacilityTypeIds=71168&Keywords=waterfront%20trail&ScrollTo=google-map-trigger&CloseMap=true&Id=6085fddb-d81f-4328-a859-fc859dc28e3a">Waterfront Trail</a></span>, and <span><a className="p-span" href="https://facilities.oshawa.ca/Home/Detail?CategoryIds=&FacilityTypeIds=&Keywords=lakeview%20park&ScrollTo=google-map-trigger&CloseMap=true&Id=ff127d8c-780d-46fe-ad52-36ecb9b2bee6">Lakeview Park</a></span>. The Larry Ladd Harbour Trail runs through the park and includes a new pedestrian bridge over the creek. The Trail is named in honour of local waterfront activist Larry Ladd. The park offers a great vantage point of the vibrant Port of Oshawa. The Park features an expansive Garden of Human Rights, a network of concrete and asphalt pathways as well as a stage with amphitheatre seating.
                    </p>
                </section>


                <section className="u-content-width page-subsection">
                    <h2 className="page-subsection__title">Park Amenities:</h2>
                    <ul className="page-subsection__list">
                        <li>
                            <i className="amenity-icon amenity-accessibility"></i>
                                Accessible
                        </li>
                        <li>
                            <i className="amenity-icon amenity-bike"></i>
                            Bike rack
                        </li>
                        <li>
                            <i className="amenity-icon amenity-garden"></i>
                            Garden
                        </li>
                        <li>
                            <i className="amenity-icon amenity-parking"></i>
                            Parking
                        </li>
                        <li>
                            <i className="amenity-icon amenity-trail"></i>
                            Recreational trail
                        </li>

                    </ul>
                </section>

                <section className="page-subsection u-content-width">
                    <h2 className="page-subsection__title">Did you know?</h2>
                    <ul className="did-you-know__list">
                        <li>
                            Ed Broadbent Waterfront Park is a two-phase redevelopment project. Phase one of the project develops the western half of the site along Simcoe Street South.
                        </li>
                        <li>
                            Elements of the old marina infrastructure are still present on the eastern half of the project site. Redevelopment of this half will require an extensive process including an environmental assessment for any shoreline rehabilitation.
                        </li>
                        <li>
                            The western site was home to historical industrial uses, which resulted in poor soil conditions. Since the City acquired the land, extensive environmental remediation efforts have been taken to ensure the site meets Federal requirements for passive recreation use. Capped lands and the floodplain present unique limitations to the park's development.
                        </li>
                        <li>
                            To improve the environmental condition of the site, there are mass plantings of native shrubs as well as riparian vegetation planting along the banks of Oshawa Creek.
                        </li>
                        <li>
                            Both deciduous and coniferous trees are planted throughout the park for shade, shelter, and noise control.
                        </li>
                    </ul>
                </section>

                <Link href="/" className="back-to-home button-color-primary" role="button">BACK TO HOME</Link>

            </section>

        </main>
        
    );
}
