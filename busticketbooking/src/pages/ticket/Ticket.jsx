import React from 'react'
import TopLayout from '../../layout/toppage/TopLayout'
import { motion } from 'framer-motion';
import RootLayout from '../../layout/RootLayout';
import Search from '../home/hero/search/Search';
import Filter from './filter/Filter';
import SearchResult from './searchresult/SearchResult';

const Ticket = () => {
    return (
        <div className='w-full pb-16 space-y-12'>
            {/* Top Layout */}
            <TopLayout
                bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
                title={"reserve your ticket"}
            />

            <RootLayout className="relative space-y-12">
                {/* Search section */}
                {/* fixing this section on the top to be sticky so that we can easily change the route */}
                <div className="sticky top-0 z-30 flex flex-col items-center justify-center w-full py-4 space-y-5 bg-neutral-50">
                    <motion.h1
                        initial={{ opacity: 0, y: -800 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -800 }}
                        transition={{ duration: 1.35, ease: "easeOut" }}
                        className="text-3xl font-semibold text-neutral-700"
                    >
                        Want to change the route?
                    </motion.h1>
                    {/* search */}
                    <Search/>
                    
                </div>

                {/* searched bus tickets */}
                <div className="relative grid w-full h-auto grid-cols-4 gap-16">
                   
                   {/* Filter section */}
                   <div className="col-span-1">
                        <Filter className="sticky z-20 space-y-4 top-52" />
                   </div>

                   {/* search tickets */}
                   <SearchResult/>
                   
                </div>

            </RootLayout>

        </div>
    )
}

export default Ticket