import React from 'react'
import RootLayout from '../../../layout/RootLayout'
import WarningAlert from '../../../components/alertmessage/WarningAlert'
import { Link } from 'react-router-dom'
import TopLayout from '../../../layout/toppage/TopLayout'

const Detail = () => {

    // show the warning message box
    const message = (
    <>
        One individual only can book 10 seats. If you want to book more than 10 seats, 
        please <Link to={"/support-team"} className='text-yellow-700 font-medium'>Contact our support team.</Link>
    </>
    );
    

  return (
    <div className='w-full pb-16 space-y-12'>
    {/* Top Layout */}

    <TopLayout
        bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
        title={"Bus Details"}
    />

    <RootLayout className="space-y-12 w-full pb-16">

        {/* Seat layout and selection action detail*/}
        <div className="w-full space-y-8">

            {/* Warning message */}
            <WarningAlert message={message} />
            {/* Seet layout */}
        </div>

        {/* Bus details */}
        <div className="w-full flex items-center justify-center flex-col gap-8 text-center"></div>

    </RootLayout>
      
    </div>
  )
}

export default Detail
