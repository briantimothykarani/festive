import { motion } from 'framer-motion';
import {TreePineIcon } from 'lucide-react';
function Homepage(){
  return(
    <>
      <div className='bg-red-500 h-120'>
      <div><p className='text-green-500 text-center font-bold text-3xl mb-8'>Timer</p>
      </div>
  <motion.div
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}>
      <div className='flex justify-center align-center bg-white  w-200 h-10 text-center rounded-2xl'>
        <div className='text-center w-30 h-7 rounded bg-white cursor-pointer  hover:text-yellow-500'><p>Onarments</p></div>
        <div className='text-center w-30 h-7 rounded bg-white cursor-pointer  hover:text-yellow-500'><p>Gifts</p></div>
        <div className='text-center w-30 h-7 rounded bg-white cursor-pointer hover:text-yellow-500'><p>lights</p></div>
        <div className='text-center w-30 h-7 rounded bg-white cursor-pointer hover:text-yellow-500'><p>House decor</p></div>
        <div className='text-center w-30 h-7 rounded bg-white cursor-pointer  hover:text-yellow-500'><p>Children</p></div>
        <div className='text-center w-30 h-7 rounded bg-white cursor-pointer  hover:text-yellow-500'><p>Trees</p></div>
      </div>
    </motion.div>
      <br/>
      <br/><br/>
      <div className='flex align-center justify-around bg-red-500'>
 
                    <div className='bg-red-500'>        <motion.div  
                        style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                      <p className='text-green-500 text-4xl text-center font-bold'>Get</p><p className='text-white text-8xl text-center font-bold'> Christmas deals</p><p className='text-green-500  text-4xl text-center font-bold'> at a discount</p>
                  </motion.div></div>
                  <div ><TreePineIcon className='text-green-500 w-50 h-50'/></div>
      </div>
      <div className='flex justify-center align-center cursor-pointer'><button className='bg-yellow-500 rounded-2xl text-white font-bold  w-60 h-10 cursor-pointer hover:bg-yellow-300 '>Check out more deals</button></div>
    </div>
    <div><p className='text-yello-500 text-center'>Hot deals</p>
  <motion.div
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}>
 
      <div className='flex justify-around'>
        <div className='b-5 rounded-2xl w-70 h-70 bg-blue-400 '><p>product1</p></div>
        <div className='b-5 rounded-2xl w-70 h-70 bg-blue-400 '><p>product1</p></div>
        <div className='b-5 rounded-2xl w-70 h-70 bg-blue-400 '><p>product1</p></div>
<div className='b-5 rounded-2xl w-70 h-70 bg-blue-400 '><p>product1</p></div>
      </div></motion.div>
    </div>
  </>
  );
};
export default Homepage
