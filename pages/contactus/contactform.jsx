"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
// import { ERRORMESSAGE} from "@/utils/constant";
import { ERRORMESSAGE } from '@/utils/constant';
import { validateName, validateMobile, validateEmail, validateAboutYou } from '@/utils/validation';
// import { contactUsApi } from '@/components/action/Prepsathi';
import Popup from './popup';

const Contactform = () => {
  // Consts
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [addForm, setAddForm] = useState("");
  const [demoForm, setDemoForm] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  // Error Messages
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [mobileErrorMessage, setMobileErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [aboutYouErrorMessage, setAboutYouErrorMessage] = useState("");

  // Ref focus for input field
  const nameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const aboutYouInputRef = useRef(null);

  // HANDLE methods
  const handleName = (e) => {
    if (e.target.value.trim() === "") {
      setNameErrorMessage(ERRORMESSAGE.NAME_IS_REQUIRED);
      nameInputRef.current.focus();
    } else {
      setNameErrorMessage(validateName(e.target.value.trim()));
      nameInputRef.current.focus();
    }
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    if (e.target.value.trim() === "") {
    } 
    else {
      setLastNameErrorMessage(validateName(e.target.value.trim()));
      lastNameInputRef.current.focus();
    }
    setLastName(e.target.value);
  };

  const handleMobile = (e) => {
    if (e.target.value.trim() === "") {
      setMobileErrorMessage(ERRORMESSAGE.MOBILE_NUMBER_IS_REQURED);
      mobileInputRef.current.focus();
    } else {
      setMobileErrorMessage(validateMobile(e.target.value.trim()));
      mobileInputRef.current.focus();
    }
    setMobile(e.target.value);
  };

  const handleEmail = (e) => {
    if (e.target.value.trim() === "") {
      setEmailErrorMessage(ERRORMESSAGE.EMAIL_IS_REQURED);
      emailInputRef.current.focus();
    } else {
      setEmailErrorMessage(validateEmail(e.target.value.trim()));
      emailInputRef.current.focus();
    }
    setEmail(e.target.value);
  };

  const handleaboutYou = (e) => {
    if (e.target.value.trim() === "") {
      setAboutYouErrorMessage(ERRORMESSAGE.MESSAGE_IS_REQUIRED);
      aboutYouInputRef.current.focus();
    } else {
      setAboutYouErrorMessage(validateAboutYou(e.target.value.trim()));
      aboutYouInputRef.current.focus();
    }
    setAboutYou(e.target.value);
  }

  const handleDemoForm = () => {
    setAddForm("add");
    setDemoForm(true);
  };

  const handleCombined = () => {
    handleFormSubmit();
    handleDemoForm();
  };

  // form Submit 
  // const handleFormSubmit = async (e) => {
    const handleFormSubmit = (e) => {
      e.preventDefault();
      setName("");
      setLastName("");
      setMobile("");
      setEmail("");
      setAboutYou("");
      setNameErrorMessage("");
      setLastNameErrorMessage("");
      setMobileErrorMessage("");
      setEmailErrorMessage("");
      setAboutYouErrorMessage("");
  
      if (!name) {
        setNameErrorMessage(ERRORMESSAGE.NAME_IS_REQUIRED);
      } else if (name) {
        setNameErrorMessage(validateName(name.trim()));
      }
  
      if (lastName) {
        setLastNameErrorMessage(validateName(lastName.trim()));
      }
  
      if (!mobile) {
        setMobileErrorMessage(ERRORMESSAGE.MOBILE_NUMBER_IS_REQURED);
      } else if (mobile) {
        setMobileErrorMessage(validateMobile(mobile.trim()));
      }
  
      if (!email) {
        setEmailErrorMessage(ERRORMESSAGE.EMAIL_IS_REQURED);
      } else if (email) {
        setEmailErrorMessage(validateEmail(email.trim()));
      }
  
      if (!aboutYou) {
        setAboutYouErrorMessage(ERRORMESSAGE.MESSAGE_IS_REQUIRED);
      } else if (aboutYou) {
        setAboutYouErrorMessage(validateAboutYou(aboutYou.trim()));
      }
  
      // For Focus
  
      if (!name) {
        nameInputRef.current.focus();
        return;
      } else if (name) {
        if (validateName(name.trim())) {
          nameInputRef.current.focus();
          return;
        }
      }
  
      if (lastName) {
        if (validateName(lastName.trim())) {
          lastNameInputRef.current.focus();
          return;
        }
      }
  
      if (!mobile) {
        mobileInputRef.current.focus();
        return;
      } else if (mobile) {
        if (validateMobile(mobile.trim())) {
          mobileInputRef.current.focus();
          return;
        }
      }
  
      if (!email) {
        emailInputRef.current.focus();
        return;
      } else if (email) {
        if (validateEmail(email.trim())) {
          emailInputRef.current.focus();
          return;
        }
      }
  
      if (!aboutYou) {
        aboutYouInputRef.current.focus();
        return;
      } else if (aboutYou) {
        if (validateAboutYou(aboutYou.trim())) {
          aboutYouInputRef.current.focus();
          return;
        }
      }
  
  //     let formData = {
  //       firstName: name,
  //       lastName: lastName,
  //       email: email,
  //       mobile: mobile,
  //       message: aboutYou,
  //     }
  
  //     contactUsDataSubmit(formData);
  //     console.log("formData", formData);
  //   };
  // const contactUsDataSubmit = async (formData) => {
  //   console.log("lets talk", formData);
  //   try {

  //     const response = await contactUsApi(formData);

  //     if (response.data.hasError == false) {
  //       setFormMessage(response.data);
  //       console.log("lets talk formsumbit", response.data.data);
  //       setDemoForm(true)
  //     }

  //     if (response.data.hasError === true) {
  //       setFormMessage(response.data);
  //       setDemoForm(true)
  //     }

  //   } catch (error) {
  //     console.error(error);
  //   }
}

  // const handleCombined = async (e) => {
  //   e.preventDefault(); // Prevents the default form submission behavior
  
  //   // Submit the form
  //   await handleFormSubmit();
  
  //   // After the form is submitted successfully, open the popup
  //   handleDemoForm();
  // };
  


  return (
    <>
    <section>
    {demoForm && (
          <Popup
            isOpen={demoForm}
            onClose={() => setDemoForm(false)}
            message={formMessage}
          />
        )}
     <div className='grid grid-cols-1 lg:grid-cols-12 2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mt-20 mb-10 gap-10'>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='col-span-1 lg:col-span-6 -mt-1'
      >
        <div className='bg-[#51a8ff3d] rounded-[15px]'>
          <div className='p-12 lg:p-[5.2rem]'>
            <h3>Let`s <span className='text-[#51A9FF] font-semibold'>talk</span> with us</h3>
            <p className='py-3'>Questions, comments, or suggestions? Simply fill in the form and we will be in touch shortly.</p>
            <div className='py-2'>
              <p>Oahfeo Workspaces, LGF, Building No 90, Sector 44, Gurugram, Haryana -122003</p>
            </div>
            <div className='py-2 h3'>
              <span className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href='tel:+91-012-44944090' target="_blank" rel="noopener noreferrer" className="ml-2 cursor-pointer">
                  +91-012-44944090
                </a>
              </span>
            </div>
            <div className='py-2 cursor-pointer h3'>
              <span className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                <a href='mailTo:info@Prepsathi.ai' target="_blank" rel="noopener noreferrer" className='ml-2'>info@Prepsathi.ai</a>
              </span>
            </div>
          </div>
        </div>
      </motion.div> */}
       <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='col-span-1 lg:col-span-6 '>
          <div className='px-12 '>
            <h2 className='text-[#1e336a] font-extrabold'>Message Us</h2>
            <p className='py-3'>Questions, comments, or suggestions? Simply fill in the form and we will be in touch shortly.</p>
            <div className='py-2'>
              <p>Advert India, Building No 10, Sector 28, Gurugram, Haryana -122003</p>
            </div>
            <div className='py-2 h3'>
              <span className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href='tel:+8675756546464' target="_blank" rel="noopener noreferrer" className="ml-2 cursor-pointer">
                +8675756546464
                </a>
              </span>
            </div>
            <div className='py-2 cursor-pointer h3'>
              <span className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                <a href='mailTo:info@Prepsathi.ai' target="_blank" rel="noopener noreferrer" className='ml-2'>info@Prepsathi.ai</a>
              </span>
            </div>
            <ul className="example-2">
        <li className="icon-content">
          <a
            href="https://linkedin.com/"
            aria-label="LinkedIn"
            data-social="linkedin"
          >
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
              xmlSpace="preserve"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          {/* <div className="tooltip">LinkedIn</div> */}
        </li>
        <li className="icon-content">
          <a
            href="https://www.github.com/"
            aria-label="GitHub"
            data-social="github"
          >
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
              xmlSpace="preserve"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          {/* <div className="tooltip">GitHub</div> */}
        </li>
        <li className="icon-content">
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            data-social="instagram"
          >
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
              xmlSpace="preserve"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          {/* <div className="tooltip">Instagram</div> */}
        </li>
        <li className="icon-content">
          <a
            href="https://youtube.com/"
            aria-label="Youtube"
            data-social="youtube"
          >
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-youtube"
              viewBox="0 0 16 16"
              xmlSpace="preserve"
            >
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.008.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          {/* <div className="tooltip">Youtube</div> */}
        </li>
            </ul>
          </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='col-span-1 lg:col-span-6'>
        <div className="max-w-2xl mx-auto bg-white rounded-[5px]" style={{ boxShadow: '0px 0px 50px 0px rgba(25.999999999999996, 46, 84.99999999999999, 0.1)' }}>
          <div className="py-4 px-6">
            <form action="#" method="POST" onSubmit={handleFormSubmit} className="mt-6">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <input 
                  type="text" 
                  name="first_name" 
                  placeholder="First Name"
                  value={name}
                  ref={nameInputRef}
                  onChange={handleName}
                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 transition duration-150" />
                     <div
                          id="nameErrorMessage"
                          className="text-red-500 text-sm">
                          {nameErrorMessage}
                        </div>
                </div> 
                <div className="w-full md:w-1/2 px-3">
                  <input type="text" 
                  name="last_name" 
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleLastName}
                  ref={lastNameInputRef}
                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 transition duration-150" />
                     <div
                          id="lastNameErrorMessage"
                          className="text-red-500 text-sm">
                          {lastNameErrorMessage}
                        </div>
                </div>
              </div>
              <div className="mb-4">
                <input 
                type="email" 
                name="email" 
                placeholder="Email"
                value={email}
                ref={emailInputRef}
                onChange={handleEmail}
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 transition duration-150" />
                 <div
                   id="EmailErrorMessage"
                    className="text-red-500 text-sm">
                    {emailErrorMessage}
                  </div>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  ref={mobileInputRef}
                  value={mobile}
                  onChange={handleMobile}
                  pattern="[6789][0-9]{9}"
                  minLength={10}
                  maxLength={10}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 transition duration-150"/>
                <div id="mobileErrorMessage" className="text-red-500 text-sm">
                  {mobileErrorMessage}
                </div>
              </div>
              <div className="mb-4">
                <textarea name="message" 
                  placeholder="Message" rows="5"
                  onChange={handleaboutYou}
                  ref={aboutYouInputRef}
                  value={aboutYou}
                  minLength={20}
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 transition duration-150"></textarea>
                  <div
                        id="aboutYouErrorMessage"
                        className="text-red-500 text-sm">
                        {aboutYouErrorMessage}
                      </div>
              </div>
              <div className="mt-6">
                <button type="submit" onClick={handleFormSubmit} 
                  className="w-full px-4 py-2 text-white bg-[#7998e5] rounded-md hover:bg-[#7ab4ef] focus:outline-none focus:bg-indigo-600 transition duration-150 ease-in-out">Send
                  Message</button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
    </>
   
  );
}

export default Contactform;
