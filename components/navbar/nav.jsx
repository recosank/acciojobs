import React from 'react';
import Image from 'next/image';
import topbarlogo from "../../public/svg/prepsathilogo1.svg"

const Nav = () => {
  return (
    <>
    <div>
        <header className='fixed top-0 left-0'>
          <div className="containerd ">
            <input type="checkbox" name="check" id="check" />
            <div className="nav-btn lg:mx-32">
                <div className="logo-container gap-5">
              <h3 className="logo">
              <Image src={topbarlogo} alt='topbarlogo' className='h-auto w-52'/>
              </h3>
            </div>
                {/* work on it */}
            <div className='bg-[#2f80ed] rounded coursesnav'>
            <ul>
            <li className="nav-link" style={{ '--i': '.85s' }}>
                    <a href="#" className='moretextclr'>Courses<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path  d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></a>
                    <div className="dropdown">
                      <ul>
                        <li className="dropdown-link">
                          <a href="#">IIT Guwahati Programs</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">PG Diploma programs</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Classroom Programs</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Mern Full Stack Development</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Java Full Stack Development</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Data Science And AI</a>
                        </li>
                        <div className="arrow"></div>
                      </ul>
                    </div>
               </li></ul> 
              </div>
              <div className="nav-links">
                <ul>
                   <li className="nav-link" style={{ '--i': '1.35s' }}>
                    <a href="#">AccioJob Reviews</a>
                  </li>
                   <li className="nav-link" style={{ '--i': '1.35s' }}>
                    <a href="#">Placements Highlights</a>
                  </li>
                  <li className="nav-link" style={{ '--i': '1.35s' }}>
                    <a href="#">Refer & Earn</a>
                  </li>
                  <li className="nav-link" style={{ '--i': '1.1s' }}>
                    <a href="#">More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path  d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></a>
                    <div className="dropdown">
                      <ul>
                        <li className="dropdown-link">
                          <a href="#">Events</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Blogs</a>
                        </li>
                        <li className="dropdown-link">
                          <a href="#">Hire From Us<i className="fas fa-caret-down"></i></a>
                        </li>
                        <div className="arrow"></div>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="log-sign" style={{ '--i': '1.8s' }}>
                <a href="#" className="btn transparent">Log in</a>
              </div>
            </div>
            <div className="hamburger-menu-container">
              <div className="hamburger-menu">
                <div></div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className='navoverlay'>
            <div className="overlay"></div>
          </div>
        </main>
    </div>

    </>
  )
}

export default Nav