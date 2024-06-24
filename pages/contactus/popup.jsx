import Image from 'next/image'
import React from 'react'

const Popup = ({ isOpen, message, onClose }) => {
  return (
    <>
      <section>
        {isOpen && (
          <div className="relative z-[999999]" id="headlessui-dialog-:r4:" role="dialog" aria-modal="true" data-headlessui-state="open">
            <div className="fixed inset-0 bg-black/20 opacity-20" aria-hidden="true"></div>
            <div className="fixed inset-0 pb-16 overflow-y-auto opacity-100 mt-0 pt-[13rem]">
              <div className="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-transform dark:bg-darkmode-600 sm:w-[460px]" id="headlessui-dialog-panel-:r5:" data-headlessui-state="open">
                <div className="p-5 text-center justify-center items-center flex flex-col">
                  {/* <div className="flex justify-center items-center w-full">
                    <Image src={logoimg} alt="logoimg" className="w-[60%]" />
                  </div> */}
                  {message.hasError == false && (
                    <>
                      <div className="mt-5 text-3xl font-extrabold">Thank You</div>

                      <div className="mt-5 text-slate-700 text-lg">Your message has been received, and we <br /> will get back to you shortly</div>

                    </>
                  )}
                  {message.hasError == true && (
                    <>
                      <div className="mt-5 text-red-700 text-2xl">{(message.message)}</div>
                    </>
                  )}
                  {/* <div className=" text-slate-500">{message}.</div> */}
                </div>
                <div className="flex justify-center items-center gap-6 pb-5">
                  {/* <button type="button" className="px-2 py-3 bg-white text-[#1e336a] lg:w-[30%] border border-[#1e336a] rounded-md hover:bg-[#1e336a] hover:text-white">Cancel</button> */}
                  <button onClick={onClose} type="button" className="px-2 py-3 bg-[#1e336a] text-white lg:w-[30%] border border-[#1e336a] rounded-md hover:bg-[#1e336a] hover:text-white">Ok</button>
                </div>
              </div>
            </div>
          </div>

        )}
      </section>
    </>
  )
}

export default Popup