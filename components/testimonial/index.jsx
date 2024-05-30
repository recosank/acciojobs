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
import student1img from "../../public/images/testimonialsimg/testistudentimg1.webp";
import testi1img from "../../public/images/testimonialsimg/testmakemytripimg.webp";
import testil2 from "../../public/images/testimonialsimg/testl2.png";
import tests2 from "../../public/images/testimonialsimg/tests2.png";
import testil3 from "../../public/images/testimonialsimg/testil3.webp";
import testis3 from "../../public/images/testimonialsimg/tests3.webp";
import testil4 from "../../public/images/testimonialsimg/testil4.webp";
import testis4 from "../../public/images/testimonialsimg/testis4.webp";
import testil5 from "../../public/images/testimonialsimg/testil5.webp";
import testis5 from "../../public/images/testimonialsimg/testis5.webp";
import testibtn5 from "../../public/images/testimonialsimg/testibutn5.svg";
import testil6 from "../../public/images/testimonialsimg/testil6.webp";
import testis6 from "../../public/images/testimonialsimg/testis6.webp";
import testil7 from "../../public/images/testimonialsimg/testil7.webp";
import testis7 from "../../public/images/testimonialsimg/testis7.webp";
import testil8 from "../../public/images/testimonialsimg/testil8.webp";
import testis8 from "../../public/images/testimonialsimg/testis8.webp";
import testil9 from "../../public/images/testimonialsimg/testil9.webp";
import testis9 from "../../public/images/testimonialsimg/testis9.webp";
import testil10 from "../../public/images/testimonialsimg/testil10.svg";
import testis10 from "../../public/images/testimonialsimg/tests10.svg";


const Testmonial = () => {
  return (
   <>
   <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mt-[7rem]'>
    <h4 className='banergradienttext  mb-2'>Student Testimonials</h4>
      <h2 className='mb-8'>Don’t just take our word for it, Go <br/> through AccioJob's <span className='text-[#2f80ed]'>Student Reviews</span></h2>
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
          autoplayDisableOnInteraction:true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
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
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#dcc9ff] p-5 flex flex-col text-center justify-center items-center'>
            <h4 className='mb-7'>Ajay Kumar</h4>
            <span><Image src={testil2} alt='testil2' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'>
             <Image src={linkdinsvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            <button className='testbutton ml-2'>
            <Image src={youtubesvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            </div>
            <span><Image src={tests2} alt='tests2' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5 '>
           <h4 className=' mb-4'>2017 pass out hired as an Data Engineer at Neustar.</h4>
            <button className='bg-[#945ff6] rounded text-[#fff] p-3'>CAREER GAP</button>
            <button className='bg-[#945ff6] rounded text-[#fff] p-3 ml-4'>NON IT</button>
            <p className='my-5 text-gray-400'>I graduated in 2017 with a mechanical engineering degree & never imagined I could switch to an amazing position so quickly. Although I had experience</p>
          </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#cde2ff] p-5 flex flex-col text-center justify-center items-center'>
           <h4 className='mb-7'>Saurabveer Singh</h4>
            <span><Image src={testil3} alt='testil3' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'>          
             <Image src={linkdinsvg} alt='youtubesvg' className='w-[1em] h-[1em]'/></button>
            <button className='testbutton ml-2'>
            <Image src={youtubesvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            </div>
            <span><Image src={testis3} alt='testis3' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5 '>
           <h4 className=' mb-4'>Procurement Manager to a Software <br/> Engineer</h4>
            <button className='bg-[#3081ed] rounded text-[#fff] p-3'>B.COM GRAD</button>
            <button className='bg-[#3081ed] rounded text-[#fff] p-3 ml-4'>WORKING PROF</button>
            <p className='my-5 text-gray-400'>Being from Commerce, I needed an intermediary to help me enter the software industry and I found AccioJob to be a perfect fit. Coming from a Non-Tech background.</p>
          </div>
        </div>
        </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#ffdcad] p-5 flex flex-col text-center justify-center items-center'>
           <h4 className='font-semibold text-xl mb-7'>Shubham Prakash</h4>
            <span><Image src={testil4} alt='testil4' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'> <Image src={linkdinsvg} alt='youtubesvg' className='w-[1em] h-[1em]'/></button>
            <button className='testbutton ml-2'>
            <Image src={youtubesvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            </div>
            <span><Image src={testis4} alt='testis4' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5 '>
           <h4 className=' mb-4'>From 60% in College to a Software Dev Engineer</h4>
            <button className='bg-[#f8b35c] rounded text-[#fff] p-3'>LOW CGPA</button>
            <button className='bg-[#f8b35c] rounded text-[#fff] p-3 ml-4'>NON-TECH</button>
            <p className='my-5 text-gray-400'>I pursued my Mechanical Engineering from Satara. After graduation, there were no placements through my college, so I had to search for jobs & got one in Manufacturing .</p>
          </div>
        </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper'>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#febab5] p-5 flex flex-col text-center justify-center items-center'>
           <h4 className='font-semibold text-xl mb-7'>Praveen Gupta</h4>
            <span><Image src={testil5} alt='testil5' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><Image src={linkdinsvg} alt='youtubesvg' className='w-[1em] h-[1em]'/></button>
            <button className='testbutton ml-2'>
            <Image src={youtubesvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            </div>
            <span><Image src={testis5} alt='testis5' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
           <h4 className=' mb-4'>Assistant System Engineer to an SDET at Gainsight</h4>
            <span className='flex'>
               <button className='bg-[#ff7169] rounded text-[#fff] p-3 flex items-center'><Image src={testibtn5} alt='testibtn5' className='mx-1'/>400% HIKE</button>
            <button className='bg-[#ff7169] rounded text-[#fff] p-3 ml-4'>WORKING PROF</button>
            </span>
           
            <p className='my-5 text-gray-400'>I was interested in math, so I chose electrical engineering. However, during my final semester, I realised that I wasn't interested in the traditional career paths.</p>
          </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#dcc9ff] p-5 flex flex-col text-center justify-center items-center'>
           <h4 className='font-semibold text-xl mb-7'>Kabita Mondal</h4>
            <span><Image src={testil6} alt='testil6' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><Image src={linkdinsvg} alt='youtubesvg' className='w-[1em] h-[1em]'/></button>
            <button className='testbutton ml-2'>
            <Image src={youtubesvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            </div>
            <span><Image src={testis6} alt='testis6' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
           <h4 className=' mb-4'>Tier 3 College Graduate to earning 11 Lakhs per year</h4>
            <button className='bg-[#945ff6] rounded text-[#fff] p-3'>FRESHER</button>
            <button className='bg-[#945ff6] rounded text-[#fff] p-3 ml-4'>B.SC GRADUATE</button>
            <p className='my-5 text-gray-400'>I highly recommend AccioJob for anyone looking to improve their DSA skills & land their dream job. As a recent B.Sc graduate, my DSA knowledge was limited.</p>
          </div>
        </div> 
        </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#cde2ff] p-5 flex flex-col text-center justify-center items-center'>
           <h4 className='font-semibold text-xl mb-7'>Lalit K Tiwari</h4>
            <span><Image src={testil7} alt='testil7' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><Image src={linkdinsvg} alt='youtubesvg' className='w-[1em] h-[1em]'/></button>
            <button className='testbutton ml-2'>
            <Image src={youtubesvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            </div>
            <span><Image src={testis7} alt='testis7' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
           <h4 className=' mb-4'>3 LPA to working as a Full Stack Developer at 15+ LPA</h4>
            <button className='bg-[#3081ed] rounded text-[#fff] p-3'>
               500% HIKE</button>
            <button className='bg-[#3081ed] rounded text-[#fff] p-3 ml-4'>WORKING PROF</button>
            <p className='my-5 text-gray-400'>
              Before joining AccioJob, my experience with coding was limited and I was stuck in an unsatisfying core job. But with AccioJob's full-stack program and the guidance of their dedicated mentors, </p>
          </div>
        </div>
        </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#ffdcad] p-5 flex flex-col text-center justify-center items-center'>
           <h4 className='font-semibold text-xl mb-7'>Shubham Bhardwaj</h4>
            <span><Image src={testil8} alt='testil8' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><Image src={linkdinsvg} alt='youtubesvg' className='w-[1em] h-[1em]'/></button>
            <button className='testbutton ml-2'>
            <Image src={youtubesvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            </div>
            <span><Image src={testis8} alt='testis8' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
           <h4 className=' mb-4'>2 yrs gap JEE Preparation to a Software Engineer</h4>
            <button className='bg-[#f8b35c] rounded text-[#fff] p-3'>CAREER GAP</button>
            <button className='bg-[#f8b35c] rounded text-[#fff] p-3 ml-4'>TIER 3 COLLEGE</button>
            <p className='my-5 text-gray-400'>I had taken a 2-year gap for JEE prep and after graduating with a B.tech in 2019, I joined AccioJob. Their course structure was great as they started . </p>
          </div>
        </div>
        </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#febab5] p-5 flex flex-col text-center justify-center items-center'>
           <h4 className='font-semibold text-xl mb-7'>Aditi Singh</h4>
            <span><Image src={testil9} alt='testil9' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><Image src={linkdinsvg} alt='youtubesvg' className='w-[1em] h-[1em]'/></button>
            <button className='testbutton ml-2'>
            <Image src={youtubesvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            </div>
            <span><Image src={testis9} alt='testis9' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
           <h4 className=' mb-4'>Arts Graduate to a Software Engineer at Converj</h4>
            <button className='bg-[#ff7169] rounded text-[#fff] p-3'>HUMANITIES STUDENT</button>
            <button className='bg-[#ff7169] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
            <p className='my-5 text-gray-400'>I had chosen BA as I was looking for a government job. However, during the lockdown, I realised that the IT sector is one that is growing rapidly .</p>
          </div>
        </div>
        </div>
           </SwiperSlide>
         {/* <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#e0fff9] p-5 flex flex-col text-center justify-center items-center'>
             <span><Image src={testil10} alt='testil10' className='mb-4'/></span>
         <h4 className='font-bold'>6000+</h4>
           <h4 className='font-semibold text-xl mb-7'>happy students!</h4>
            <div className='flex '>
            <button className='testbutton'><Image src={linkdinsvg} alt='youtubesvg' className='w-[1em] h-[1em]'/></button>
            <button className='testbutton ml-2'>
            <Image src={youtubesvg} alt='youtubesvg' className='w-[1em] h-[1em]'/>
            </button>
            </div>
            <span><Image src={testis10} alt='testis10' className='my-6 w-28 h-28'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
           <h4 className=' mb-4'>We have an <br/>endless count of <br/>inspirational stories....</h4>
            <p className='my-5 text-gray-400'>Till date, we have impacted the lives of over 6000+ students by helping them secure various roles such as Frontend Developer, Backend Developer, SDE, Full-Stack Developer</p>
             <button className='bg-[#3081ed] rounded text-[#fff] p-3 ml-4'>Raed More</button>
          </div>
        </div>
        </div>
        </SwiperSlide> */}
         </Swiper> 
      </div>
   </div>
   </>
  )
}

export default Testmonial