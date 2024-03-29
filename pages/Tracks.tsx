import * as React from 'react'; 
import {motion} from 'framer-motion';
import { useState } from 'react';
import { Typography } from '@mui/material';
import "@fontsource/hind-siliguri";

function Tracks() {
  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);
  const [isHovered3, setHovered3] = useState(false);
  const [isHovered4, setHovered4] = useState(false);

  const flip1 = () => {
    setHovered1(true);
    setHovered2(false);
    setHovered3(false);
    setHovered4(false);
  };

  const flip2 = () => {
    setHovered1(false);
    setHovered2(true);
    setHovered3(false);
    setHovered4(false);
  };

  const flip3 = () => {
    setHovered1(false);
    setHovered2(false);
    setHovered3(true);
    setHovered4(false);
  };

  const flip4 = () => {
    setHovered1(false);
    setHovered2(false);
    setHovered3(false);
    setHovered4(true);
  };

  return (
    <>
    {/* header */}
    <div className="h-center">
     <div className='flex justify-center items-center h-center mb-[20px] pb-20'>
         <img src="slot_machine.png" className="transform scale-50"/>
         <div className="font-sans-CooperHewitt text-4xl text-center">
         <Typography fontFamily={"var(--lucidity)"} className="text-xl md:text-4xl font-bold">TRACKS</Typography>
         </div>
     </div>
    <div className='flex flex-col gap-[30px] lg:flex-row lg:gap-0 justify-center items-center'>
        <div className="flex">
            <motion.div className='card'
                onHoverStart={() => setHovered1(true)}
                onHoverEnd={() => setHovered1(false)}>
                <motion.div
                    className="card"
                    onMouseEnter={flip1}
                    animate={{ rotateY: isHovered1 ? 180 : 0 }}
                    transition={{ duration: 1.5 }}>
                {!isHovered1 ? (
                    <div className='front'>
                        <div className="justify-center h-center flex">
                            <img src="card_f_athletes.png" className="flex text-center px-[1rem]" alt="track1"/>
                        </div>
                    </div>
                ) :(
                    <div className="">
                        <div className="justify-center h-center flex">
                            <img src="card_b_athletes.png" className="flex text-center px-[1rem]" alt="track1"/>
                        </div>
                    </div>
                )}
                </motion.div>
            </motion.div>
            <motion.div className='card'
                onHoverStart={() => setHovered2(true)}
                onHoverEnd={() => setHovered2(false)}>
            <motion.div
            className="card"
            onMouseEnter={flip2}
            animate={{ rotateY: isHovered2 ? 180 : 0 }}
            transition={{ duration: 1.5 }}>
            {!isHovered2 ? (
                <div className='front'>
                    <div className="justify-center h-center flex">
                        <img src="card_f_brainiacs.png" className="flex text-center px-[1rem]" alt="track2"/>
                    </div>
                </div>
            ) :(
                <div className="">
                    <div className="justify-center h-center flex">
                        <img src="card_b_brainiacs.png" className="flex text-center px-[1rem]" alt="track2"/>
                    </div>
                </div>
            )}
            </motion.div>
            </motion.div>
        </div>
        <div className="flex">
            <motion.div className='card'
                onHoverStart={() => setHovered3(true)}
                onHoverEnd={() => setHovered3(false)}>
            <motion.div
            className="card"
            onMouseEnter={flip3}
            animate={{ rotateY: isHovered3 ? 180 : 0 }}
            transition={{ duration: 1.5 }}>
            {!isHovered3 ? (
                <div className='front'>
                    <div className="justify-center h-center flex">
                        <img src="card_f_saints.png" className="flex text-center px-[1rem]" alt="track3"/>
                    </div>
                </div>
            ) :(
                <div className="">
                    <div className="justify-center h-center flex">
                        <img src="card_b_saints.png" className="flex text-center px-[1rem]" alt="track3"/>
                    </div>
                </div>
            )}
            </motion.div>
            </motion.div>
            <div className="order-first lg:order-none">
                <motion.div className='card'
                    onHoverStart={() => setHovered4(true)}
                    onHoverEnd={() => setHovered4(false)}>
                <motion.div
                    className="card"
                    onMouseEnter={flip4}
                    animate={{ rotateY: isHovered4 ? 180 : 0 }}
                    transition={{ duration: 1.5 }}>
                {!isHovered4 ? (
                    <div className='front'>
                        <div className="justify-center h-center flex">
                            <img src="card_f_creatives.png" className="flex text-center px-[1rem]" alt="track4"/>
                        </div>
                    </div>
                ) :(
                    <div className="">
                        <div className="justify-center h-center flex">
                            <img src="card_b_creatives.png" className="flex text-center px-[1rem]" alt="track4"/>
                        </div>
                    </div>
                )}
                </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Tracks;
