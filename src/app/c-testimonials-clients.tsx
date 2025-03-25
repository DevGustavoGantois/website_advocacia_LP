"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import { testimonialsData } from './v-data';

export function TestimonialsClients() {
    return (
        <article>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className='my-10'
            >
                {testimonialsData.map((item, index) => (
                    <SwiperSlide key={index} className='relative rounded-md bg-gradient-to-b from-[#E3E3E3] to-[#FFFF] p-6 lg:p-12'>
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <p className='text-center text-sm lg:text-base text-gray-500 max-w-[263px]'>
                                {item.quote}
                            </p>
                            <h1 className='bg-clip-text text-transparent text-xl bg-gradient-to-r from-[#F1D67D] to-[#D18400] font-primary'>
                                {item.client}
                            </h1>
                        </div>
                        <div className='absolute top-[192px] lg:top-[260px] overflow-hidden left-0 right-0'>
                            <div className='w-full h-2 bg-gradient-to-r from-[#F1D67D] to-[#D18400]' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </article>
    );
}
