"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import linkdinsvg from "../../public/svg/linkdin.svg";
import youtubesvg from "../../public/svg/youtube.svg";

const testimonials = [
  {
    name: 'Ajay Kumar',
    background: '#dcc9ff',
    text: 'I graduated in 2017 with a mechanical engineering degree & never imagined I could switch to an amazing position so quickly. Although I had experience',
  },
  {
    name: 'Saurabveer Singh',
    background: '#cde2ff',
    text: 'Being from Commerce, I needed an intermediary to help me enter the software industry and I found AccioJob to be a perfect fit. Coming from a Non-Tech background.',
  },
  {
    name: 'Shubham Prakash',
    background: '#ffdcad',
    text: 'Being from Commerce, I needed an intermediary to help me enter the software industry and I found AccioJob to be a perfect fit. Coming from a Non-Tech background.',
  },
  {
    name: 'Praveen Gupta',
    background: '#febab5',
    text: 'Being from Commerce, I needed an intermediary to help me enter the software industry and I found AccioJob to be a perfect fit. Coming from a Non-Tech background.',
  },
  {
    name: 'Kabita Mondal',
    background: '#dcc9ff',
    text: 'Being from Commerce, I needed an intermediary to help me enter the software industry and I found AccioJob to be a perfect fit. Coming from a Non-Tech background.',
  },
  {
    name: 'Lalit K Tiwari',
    background: '#cde2ff',
    text: 'Before joining AccioJob, my experience with coding was limited and I was stuck in an unsatisfying core job. But with AccioJob\'s full-stack program and the guidance of their dedicated mentors, ',
  },
];

const Testimonial = () => {
  return (
    <>
      <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mb-16 mt-28'>
        <h4 className='banergradienttext text-xl mb-2'>Student Testimonials</h4>
        <h1 className='text-[36px] font-bold mb-8'>Don’t just take our word for it, Go <br /> through AccioJob's <span className='text-[#2f80ed]'>Student Reviews</span></h1>
        <div className='w-[100%]'>
          <Swiper
            initialSlide={2}
            speed={2000}
            loop={true}
            roundLengths={true}
            mousewheel={true}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 7000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
              autoplayDisableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1025: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='testimonialwrapper'>
                  {/* <div className=''> */}
                    <div className={`p-5 flex flex-col text-center justify-center items-center`} style={{ background: testimonial.background }}>
                      <h1 className='font-semibold text-xl mb-7'>{testimonial.name}</h1>
                      <p className='my-5 text-gray-400'>{testimonial.text}</p>
                      <div className='flex'>
                        <button className='testbutton'>
                          <Image src={linkdinsvg} alt='LinkedIn' className='w-[1em] h-[1em]' />
                        </button>
                        <button className='testbutton ml-2'>
                          <Image src={youtubesvg} alt='YouTube' className='w-[1em] h-[1em]' />
                        </button>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonial;
