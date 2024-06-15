"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import tagimg1 from "../../public/images/tagimgdomy1.svg";
import tagimg2 from "../../public/images/tagimgdomy2.png";
import tagimg3 from "../../public/images/tagimgdomy.svg";

const Hideshowtabs = () => {

    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (number) => {
      setActiveButton(number);
    };
  
  return (
   <>
   <div className='bg-[#2ab0e4] mt-28 pt-20 pb-20 '>
      <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-20 text-center'>
          <h2 className='banergradienttext mb-2 '>ONE-STOP LEARNING PLATFORM</h2>
          <h1 className='text-[36px] font-bold mb-3'>Everything you need to crack your <span className='text-[#2f80ed]'>Dream Job</span></h1>
          <p className='text-lg font-semibold'>You will have access to Live Doubt Solving, 1-on-1 Practice Interviews, Weekly Contests, Our Placement Portal and More!</p>
        <div>
        <div className="tab_container">
      <div className="selectSection">
        <button
          type="button"
          data-number="1"
          className={activeButton === 1 ? 'active' : ''}
          onClick={() => handleButtonClick(1)}
        >
          Our Portal
        </button>
        <button
          type="button"
          data-number="2"
          className={activeButton === 2 ? 'active' : ''}
          onClick={() => handleButtonClick(2)}
        >
         Daily Live Classes
        </button>
        <button
          type="button"
          data-number="3"
          className={activeButton === 3 ? 'active' : ''}
          onClick={() => handleButtonClick(3)}
        >
         Doubt Solving
        </button>
        <button
          type="button"
          data-number="4"
          className={activeButton === 4 ? 'active' : ''}
          onClick={() => handleButtonClick(4)}
        >
         Doubt Solving
        </button>
        <button
          type="button"
          data-number="5"
          className={activeButton === 5 ? 'active' : ''}
          onClick={() => handleButtonClick(5)}
        >
         Doubt Solving
        </button>
        <button
          type="button"
          data-number="6"
          className={activeButton === 6 ? 'active' : ''}
          onClick={() => handleButtonClick(6)}
        >
         Doubt Solving
        </button>
      </div>

      <div className="contentSection">
        {contentData.map((content) => (
          <div
            key={content.number}
            className="content"
            style={{ display: activeButton === content.number ? 'block' : 'none' }}
          >
            {/* <p>{content.text}</p> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
                    <div className='text-start  text-[#fff] '>
                       {/* <h4 className=' text-amber-500 text-xl font-bold'>{content.heading}</h4>   */}
                       <h4 className={`text-xl font-bold`} style={{ color: content.headingColor }}>{content.heading}</h4>
                   <h2 className='font-bold text-[#fff] text-[36px] py-5'>{content.subheading}</h2>
                    <p className='text-lg'>{content.paragraph}</p> 
                    </div>
                   <div>
                    <Image src={content.image} alt='tagimg1' className='w-auto h-auto'/>
                   </div>
                </div>
          </div>
        ))}
      </div>
    </div>
    </div>
   </div>
   </div>
   </>
  )
}

const contentData = [
    { number: 1, 
    heading: 'OUR PORTAL', 
    headingColor: 'orange',
    subheading: 'Experience AccioJob`s Learning Portal through a Quick Video Tour',
    paragraph:'Leaderboard, Job Sincerity, Modules, Gym, Live Doubts, Contests, Mentorship Sessions, Job Portal, Notes, Open Editor, Projects & many more such feature for you to check out! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae excepturi aut ab vitae, dolorem voluptas illo illum assumenda? Nisi possimus nobis neque quos culpa, nam veniam blanditiis voluptates eaque?',
    image:tagimg1,
     },
    { number: 2, 
    heading: 'Maximize your learning potential with our expert-led live classes.', 
    headingColor: 'red',
    subheading: 'Easily keep track of your job applications with our Placement Portal.',
    paragraph:'We`ve got you covered, our instructors are available every day to help you understand every topic, and if you can`t attend a class, you can watch the recording laterdolor sit amet consectetur adipisicing elit. Alias molestiae excepturi aut ab vitae, dolorem voluptas illo illum assumenda? Nisi possimus nobis neque quos culpa, nam veniam blanditiis voluptates eaque?',
    image:tagimg2,},
    { number: 3, 
    heading: 'Cristiano, Matuidi & Ramsey' , 
    headingColor: 'pink',
    subheading: 'Get immediate answers to your coding queries with our Live Doubt Assistance.',
    paragraph:'Our Mentors are available on Chat and on Video as well to ensure that you don`t get stuck anywhere and can manage your time efficientlydolor sit amet consectetur adipisicing elit. Alias molestiae excepturi aut ab vitae, dolorem voluptas illo illum assumenda? Nisi possimus nobis neque quos culpa, nam veniam blanditiis voluptates eaque?',
    image:tagimg3,},
    { number: 4, 
    heading: 'DOUBT SOLVING', 
    headingColor: '#1e336a',
    subheading: 'Get Placement ready by giving 1-on-1 Mock Interviews with Mentors from Top Tech Companies.' ,
    paragraph:'Get set for success with endless support! Mentorship sessions, Resume/Project reviews, Mock HR interviews, and Job Readiness sessions - all available to you dolor sit amet consectetur adipisicing elit. Alias molestiae excepturi aut ab vitae, dolorem voluptas illo illum assumenda? Nisi possimus nobis neque quos culpa, nam veniam blanditiis voluptates eaque?',
    image:tagimg1,},
    { number: 5,
     heading: 'PRACTICE INTERVIEWS' ,
     headingColor: '#51a9ff', 
     subheading: 'Easily keep track of your job applications with our Placement Portal.',
    paragraph:'Easily keep track of companies, positions, ongoing tests, technical and HR interviews, and secure your dream job in no timedolor sit amet consectetur adipisicing elit. Alias molestiae excepturi aut ab vitae, dolorem voluptas illo illum assumenda? Nisi possimus nobis neque quos culpa, nam veniam blanditiis voluptates eaque?',
    image:tagimg2,},
    { number: 6, 
    heading: 'PLACEMENT PORTAL', 
    headingColor: '#893a5g',
    subheading: 'Stay ahead of the competition by preparing for company tests through our curated weekly contests.',
    paragraph:'We`ll cover all the important topics through these contests so that you can crush the module test and interview and know how you rank among your classmatesdolor sit amet consectetur adipisicing elit. Alias molestiae excepturi aut ab vitae, dolorem voluptas illo illum assumenda? Nisi possimus nobis neque quos culpa, nam veniam blanditiis voluptates eaque?', 
    image:tagimg3,},
  ];

export default Hideshowtabs