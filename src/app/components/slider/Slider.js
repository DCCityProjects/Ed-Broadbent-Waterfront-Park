import Image from "next/image";
import "/src/app/css/slider.css";
import 'swiper/css';
import 'swiper/css/bundle';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';


export default function Slider({imageData, openImageModal}) {

    return (
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
        {imageData.map((image, index)=> {
            return(
                <SwiperSlide key={index}>
                    <Image
                        src={image.src}
                        width={0}
                        height={0}
                        sizes="33vw"
                        className="slider__image"
                        alt={image.alt}
                        onClick={()=> openImageModal(image.src, image.alt)}
                    >
                    </Image>
                </SwiperSlide>
            )
            
        })}
        </Swiper>
    );
}