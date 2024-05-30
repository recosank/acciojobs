"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import cardimg from "../../public/images/cardimg.jpg";

const Cards = () => {
  return (
    <>
    <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mt-[7rem]'>
    <h4 className='banergradienttext mb-2'>MENTORS & INSTRUCTORS AT ACCIOJOB</h4>
      <h2 className=' mb-8'>India’s <span className='text-[#2f80ed]'>Top Instructors</span>  to <br/> help you reach your full <br/> potential</h2>
     <div>
   <main className="card_grid">
   <Swiper
        initialSlide={2}
        speed={2000}
        loop={true}
        roundLengths={true}
        mousewheel={true}
        grabCursor={true}
       
        autoplay={{
          delay: 7000,
           pauseOnMouseEnter: true,
          disableOnInteraction: false,
          autoplayDisableOnInteraction:true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={false}
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
    <section className="card cyan">
      <h4 className="card_title">Supervisor</h4>
      <p className="card_content">Monitors activity to identify project roadblocks Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam modi deserunt incidunt quibusdam eaque minima ipsum unde vel hic numquam id atque autem dolore labore architecto quia, et velit?</p>
      <Image className="card_img"  height={50} width={50} src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg" alt="page-home"/>
    </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="card red">
    <h4 className="card_title">Supervisor</h4>
      <p className="card_content">Monitors activity to identify project roadblocks Lorem ipsum dolor sit amet, jytfg consectetur adipisicing elit. Laborum beatae est minima dolor aliquam iusto tempore eos. At quaerat tempora placeat eveniet ea corrupti velit suscipit repudiandae.</p>
      <Image className="card_img"  height={50} width={50} src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg" alt="page-home"/>
    </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="card blue">
    <h4 className="card_title">Supervisor</h4>
      <p className="card_content">Monitors activity to identify project roadblocks Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis nihil quam eligendi molestias eius molestiae nostrum illo, alias reiciendis at maiores ipsam, corporis dolor ducimus eveniet commodi quo quas!</p>
      <Image className="card_img"  height={50} width={50} src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg" alt="page-home"/>
    </section>
    </SwiperSlide>
         <SwiperSlide>
    <section className="card orange">
    <h4 className="card_title">Supervisor</h4>
      <p className="card_content">Monitors activity to identify project roadblocks Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id voluptatum sit consequuntur, quae saepe assumenda ipsa aperiam voluptatem? Cupiditate id, similique dolorem sequi sit asperiores!</p>
      <Image className="card_img"  height={50} width={50} src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg" alt="page-home"/>
    </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="card cyan">
    <h4 className="card_title">Supervisor</h4>
      <p className="card_content">Monitors activity to identify project roadblocks Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minus magni eligendi neque temporibus non quibusdam doloribus laborum et facilis autem possimus, harum, eaque repreh?</p>
      <Image className="card_img"  height={50} width={50} src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg" alt="page-home"/>
    </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="card red">
    <h4 className="card_title">Supervisor</h4>
      <p className="card_content">Monitors activity to identify project roadblocks Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus possimus distinctio et laborum obcaecati voluptatum magni! Error, totam incidunt, eveniet a saepe vero aut tenetur.</p>
      <Image className="card_img"  height={50} width={50} src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg" alt="page-home"/>
    </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="card blue">
    <h4 className="card_title">Supervisor</h4>
      <p className="card_content">Monitors activity to identify project roadblocks Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi magnam atque fugiat fuga, qui a cupiditate quis perferendis minus? Cumque dolores quas atque iusto amet aspernatur nisi molestias perspiciatis.</p>
      <Image className="card_img"  height={50} width={50} src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg" alt="page-home"/>
    </section>
    </SwiperSlide>
       <SwiperSlide>
    <section className="card orange">
      <h4 className="card_title">Calculator</h4>
      <p className="card_content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sunt eveniet sequi doloribus assumenda expedita, itaque et, voluptas, perferendis accusantium quasi dicta in iste aut veniam tempore similique nostrum eaque enim illo laudantium animi quos ipsum.</p>
      <Image className="card_img"  height={50} width={50} src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-calculator.svg" alt="Calculator"/>
    </section>
    </SwiperSlide>
         </Swiper> 
  </main>
</div>
     </div>
    </>
    
  )
}

export default Cards