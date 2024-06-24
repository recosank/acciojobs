import React from 'react';
import { motion } from 'framer-motion';

const Contactusmap = () => {
 
    return (
       <div className='my-20'>
             <motion.div
              initial={{y:100, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{delay:0.2, 
               y:{type:"spring", 
              stiffness:60}, 
              opacity:{duration:1},
              ease:"easeIn", duration:1}}
             className='relative'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72022623845!2d76.82493255254028!3d28.423160295271465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1718821718078!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="relative z-[5px]  w-full h-[80vh] border-2 border-[#51a9ff]"></iframe>
              </motion.div>
       </div>
    )
  }
  
  export default Contactusmap