"use client";
import React from 'react';
import Image from 'next/image';
import whatsapplogo from "../../public/images/whatsapp.png";
import facebooklogo from "../../public/images/facebook.png";
import telephonelogo from "../../public/images/telephone.png";
import linkdinsvg from "../../public/svg/linkdin1.svg";

const stats = [
  { logo: telephonelogo, label: 'Call', url: 'tel:+123456789' },
  { logo: whatsapplogo, label: 'Whatsapp', url: 'https://wa.me/123456789' },
  { logo: facebooklogo, label: 'Facebook', url: 'https://www.facebook.com/yourprofile' },
];

const Herosection = () => {
  return (
    <>
      <div className='shadow-lg pb-[98px]'>
        <div className='grid grid-cols-1 lg:grid-cols-12 2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 gap-14'> 
          <div className='col-span-1 lg:col-span-7'>
            <div className='mt-[9rem]'>
              <h1 className='font-bold'>
                Ignite Your <span className='text-[#51a9ff]'>Tech Career</span> <br />
                Today: Learn, Grow, and Get Placed
              </h1>
              <h3 className='mt-5 banergradienttext'>
                Full Stack Development | Cyber Security | Data Science & AI
              </h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 border banerlogosection text-center gap-10 '>
              {stats.map((stat, index) => (
                <div key={index}>
                  <a href={stat.url} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
                    <Image src={stat.logo} alt={`banerlogo${index + 1}`} className='w-12 h-12' />
                    <div className='ml-4 text-start text-black'>
                      <p>{stat.label}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-center my-5'>
              <button className='bg-[#2f80ed] flex px-8 py-4 text-[#fff] rounded-full items-center banerbtnshadow font-bold text-lg w-[350px] justify-center'>
                <span>
                  <Image src={linkdinsvg} alt='linkdinsvg' className='w-7 h-7' />
                </span>{" "}
                LinkedIn Top 20 Startups
              </button>
              <button className='bg-[#fff] flex px-8 py-4 text-[#2f80ed] rounded-full items-center banerbtnshadow font-bold text-lg w-[400px] justify-center'>
                Made with 💙 by an AccioJob Student
              </button>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-5 mt-28 mb-5'>
            <div className='bg-[#fff] py-14 px-12 banerformshadow rounded-[30px] text-center'>
              <h4 className='mb-6'>Start learning</h4>
              <p className='text-gray-400 pb-8'>Lectures & Assignments curated by Top Tech <br/> Professionals</p>
              <form>
                <div className="mb-4 flex justify-center">
                  <div className="relative w-full">
                    <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-8 h-8">
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </i>
                    <input
                      type="text"
                      id="fullName"
                      className="shadow appearance-none rounded-[0.30rem] w-full py-6 pl-14 pr-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="mb-6 flex justify-center">
                  <div className="relative w-full flex items-center">
                    <select
                      id="countryCode"
                      className="shadow appearance-none rounded-[0.30rem] py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="+91">+91</option>  
                      <option value="+44">+44</option>
                      <option value="+1">+1</option>  
                      <option value="+61">+61</option>  
                      <option value="+81">+81</option>  
                      <option value="+49">+49</option>  
                      <option value="+33">+33</option>  
                      <option value="+34">+34</option>  
                      <option value="+39">+39</option>
                      <option value="+86">+86</option> 
                    </select>
                    <input
                      type="tel"
                      id="phoneNumber"
                      className="shadow appearance-none rounded-[0.30rem] w-full py-6 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="mt-14">
                  <button
                    type="submit"
                    className="bggradient w-full text-white font-extrabold py-6 px-7 rounded-[0.30rem] focus:outline-none focus:shadow-outline flex justify-center items-center hover:shadow-xl"
                  >
                    Apply Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </form>
              <h5 className='mt-5'>Your Path to UGC NET Success Starts Here - <br/>
                <span className='text-[#2f80ed] text-lg font-bold'>Register Today!</span> 
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
