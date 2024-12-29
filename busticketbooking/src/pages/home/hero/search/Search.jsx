import React from 'react'
import {motion} from 'framer-motion';

const Search = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full p-5 border-2 shadow-lg bg-neutral-50/20 border-neutral-300 rounded-xl"
        >
            <div className="flex items-center justify-between w-full gap-5">

                {/* from and to input section */}
                <div className="w-[60%] flex items-center gap-5 relative">
                    {/*From*/}
                    <div className="flex items-center w-1/2 px-5 text-base font-medium border rounded-lg h-14 border-neutral-300 bg-white/70 text-neutral-700 gap-x-1">
                    </div>

                    {/*To*/}
                    <div className="flex items-center w-1/2 px-5 text-base font-medium border rounded-lg h-14 border-neutral-300 bg-white/70 text-neutral-700 gap-x-1">
                    </div>

                    {/*Exchange button*/}
                    <button className='absolute flex items-center justify-center h-6 -translate-x-1/2 -translate-y-1/2 rounded-full w-11 top-1/2 left-1/2 bg-primary'>
                        <TbArrowsExchange className ="w-6 h-6 text-neutral-50" />
                    </button>

                </div>

                {/* data and button section*/}
                <div className="flex items-center flex-1 gap-5 h-14">
                    
                </div>

            </div>

        </motion.div >
    )
}

export default Search