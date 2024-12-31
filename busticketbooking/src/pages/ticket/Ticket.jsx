import React from 'react'
import TopLayout from '../../layout/toppage/TopLayout'

const Ticket = () => {
  return (
    <div className='w-full pb-16 space-y-12'>
        {/* Top Layout */}
        <TopLayout
        bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
        title={"reserve your ticket"}
        />
    </div>
  )
}

export default Ticket