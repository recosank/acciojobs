import React from 'react';
import Image from 'next/image';
// import cardsimg1 from "../../public/svg/cardimg1.svg";

const CoursesCards = () => {
  return (
    <>
      <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mb-16 mt-28'>
    <h4 className='banergradienttext mb-2'>GET HANDS-ON EXPERIENCE</h4>
      <h2 className='mb-8'>Take a look at our Amazing Curated Courses!</h2>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        <div className='courses_main'>
            <div className='p-5 border-b-2 cardbggradient1'>
              <div className='flex justify-around '>
                <span> 
                     <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="text-[#945FF6] text-[3rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 14h6v2h-6zM6.293 9.707 8.586 12l-2.293 2.293 1.414 1.414L11.414 12 7.707 8.293z"></path><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path></svg></span>
                {/* <span><Image src={cardsimg1} alt='cardsimg1' className=''/></span> */}
              </div>
              <h4>Java Full-Stack Development Track</h4>
                <div className='flex gap-5'>
                <button className='coursebtn'>DURATION : 8 MONTHS</button>
                <button className='coursebtn'>SEATS LEFT :24</button>
              </div>
              <p>Master DSA, Problem Solving, Full Stack and crack top Software Development jobs</p>
            </div>
            <div className='p-5 border-b-2'>
                <div className='flex items-center gap-3'>
                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true" className="text-[1.1rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path></svg>
                 <h4>CURRICULUM</h4>
                </div>
                    <ul>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Data Structures and Algorithms</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Frontend Development with HTML, CSS, JS</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Backend Development with Spring Framework</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Internship / Capstone Project</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Mock Interviews</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Mentorship Sessions</p>
                        </li>
                    </ul>
            </div>
            <div className='p-5 border-b-2'>
                <div className='flex items-center gap-3'>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="text-[1.1rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z"></path></svg>
                 <h4>PLACEMENTS</h4>
                </div>
                    <ul>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Pay after Placement Option</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Dedicated Learning Coach</p>
                        </li>
                    </ul>
                    <div className='flex gap-5 mt-5'>
                        <button className='coursesbtn1'>Brochure</button>
                        <button className='coursesbtn2'>Learn More</button>
                    </div>
            </div>
        </div>
        <div className='courses_main'>
            <div className='p-5 border-b-2 cardbggradient2'>
              <div className='flex justify-around '>
                <span> 
                     <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="text-[#007965] text-[3rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 14h6v2h-6zM6.293 9.707 8.586 12l-2.293 2.293 1.414 1.414L11.414 12 7.707 8.293z"></path><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path></svg></span>
                {/* <span><Image src={cardsimg1} alt='cardsimg1' className=''/></span> */}
              </div>
              <h4>Java Full-Stack Development Track</h4>
                <div className='flex gap-5'>
                <button className='coursesbtn01'>DURATION : 8 MONTHS</button>
                <button className='coursesbtn01'>SEATS LEFT :24</button>
              </div>
              <p>Master DSA, Problem Solving, Full Stack and crack top Software Development jobs</p>
            </div>
            <div className='p-5 border-b-2'>
                <div className='flex items-center gap-3'>
                <svg stroke="currentColor" fill="none"  viewBox="0 0 24 24" aria-hidden="true" className="text-[1.1rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path></svg>
                 <h4>CURRICULUM</h4>
                </div>
                    <ul>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Data Structures and Algorithms</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Frontend Development with HTML, CSS, JS</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Backend Development with Spring Framework</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Internship / Capstone Project</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Mock Interviews</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Mentorship Sessions</p>
                        </li>
                    </ul>
            </div>
            <div className='p-5 border-b-2'>
                <div className='flex items-center gap-3'>
                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="text-[1.1rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z"></path></svg>
                 <h4>PLACEMENTS</h4>
                </div>
                    <ul>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Pay after Placement Option</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Dedicated Learning Coach</p>
                        </li>
                    </ul>
                    <div className='flex gap-5 mt-5'>
                        <button className='coursesbtn1'>Brochure</button>
                        <button className='coursesbtn2'>Learn More</button>
                    </div>
            </div>
        </div>
        <div className='courses_main'>
            <div className='p-5 border-b-2 cardbggradient3'>
              <div className='flex justify-around '>
                <span> 
                     <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="text-[#F86241] text-[3rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 14h6v2h-6zM6.293 9.707 8.586 12l-2.293 2.293 1.414 1.414L11.414 12 7.707 8.293z"></path><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path></svg></span>
                {/* <span><Image src={cardsimg1} alt='cardsimg1' className=''/></span> */}
              </div>
              <h4>Java Full-Stack Development Track</h4>
                <div className='flex gap-5'>
                <button className='coursesbtn02'>DURATION : 8 MONTHS</button>
                <button className='coursesbtn02'>SEATS LEFT :24</button>
              </div>
              <p>Master DSA, Problem Solving, Full Stack and crack top Software Development jobs</p>
            </div>
            <div className='p-5 border-b-2'>
                <div className='flex items-center gap-3'>
                <svg stroke="currentColor" fill="none"  viewBox="0 0 24 24" aria-hidden="true" className="text-[1.1rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path></svg>
                 <h4>CURRICULUM</h4>
                </div>
                    <ul>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Data Structures and Algorithms</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Frontend Development with HTML, CSS, JS</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Backend Development with Spring Framework</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Internship / Capstone Project</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Mock Interviews</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Mentorship Sessions</p>
                        </li>
                    </ul>
            </div>
            <div className='p-5 border-b-2'>
                <div className='flex items-center gap-3'>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="text-[1.1rem]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z"></path></svg>
                 <h4>PLACEMENTS</h4>
                </div>
                    <ul>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Pay after Placement Option</p>
                        </li>
                        <li className='flex items-center gap-3'>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" className="check-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                        <p className='text-[#565656]'>Dedicated Learning Coach</p>
                        </li>
                    </ul>
                    <div className='flex gap-5 mt-5'>
                        <button className='coursesbtn1'>Brochure</button>
                        <button className='coursesbtn2'>Learn More</button>
                    </div>
            </div>
        </div>
      </div>
        
    </div>
    </>
  )
}

export default CoursesCards