import React, { useState, useEffect } from 'react'
import { GiSteeringWheel } from 'react-icons/gi';
import busSeatData from '../../../../../constants/busseat/BusSeatData';
import { MdOutlineChair } from 'react-icons/md';


const BusSeat = () => {

    //Track seat selection
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showError, setShowError] = useState(false);

    //Toggle seat selection
    const handleSeatClick = (seatId) => {
        //If the seat is already booked, ignore the click or disable it 
        const selectedSeat = busSeatData.find((seat) => seat.id === seatId);
        if (selectedSeat.status === 'booked') {
            return; //do nothing
        };

        //If the seat is available, select it
        setSelectedSeats((prevSelectedSeats) => {
            //check if the seat is already selected
            if (prevSelectedSeats.includes(seatId)) {
                return prevSelectedSeats.filter((seat) => seat !== seatId); // vice versa or deselect
            } else {
                // Show the error if more than 10 seats are selected
                if (prevSelectedSeats.length >= 10) {
                    setShowError(true);
                    return prevSelectedSeats; // Do not select the seat more than 10
                } else {
                    return [...prevSelectedSeats, seatId];
                }
            }
        })
    };

    //Hide the error message after 10 seconds
    useEffect(() => {
        if (showError) {
            const timer = setTimeout(() => {
                setShowError(false);
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, [showError]);

    //function to determine seat class or seat name on status
    const getSeatName = (seat) => {
        if (seat.status === 'booked') {
            return 'text-primary cursor-not-allowed' // bookes seat unavailable
        } if (selectedSeats.includes(seat.id)) {
            return 'text-yellow-600 cursor-pointer' // selected seat
        }
        return 'text-neutral-500 cursor-pointer' // available seat
    };


    return (
        <div className="grid w-full grid-cols-5 gap-10">
            {/* Seat Layout */}
            <div className="flex items-center justify-center w-full col-span-3 p-4 border shadow-sm rounded-xl border-neutral-200">

                <div className="w-full space-y-7">
                    <p className="text-base font-medium text-center text-neutral-600">
                        Click on available seats to reserve your seat.
                    </p>

                    {/* Seat layout */}
                    <div className="w-full flex items-stretch gap-x-1.5">
                        <div className="w-10 h-fit">
                            <GiSteeringWheel className='text-3xl -rotate-90 mt-7 text-primary' />
                        </div>

                        {/* Seat rows */}
                        <div className="flex flex-col items-center border-l-2 border-dashed border-neutral-300 pl-7">

                            <div className="flex-1 space-y-5">
                                {/* First row */}
                                <div className="grid justify-end w-full h-auto grid-cols-9 gap-x-5">
                                    {busSeatData.slice(0, 9).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className="flex items-center gap-x-0"
                                            onClick={() => handleSeatClick(seat.id)}
                                        >
                                            <h6 className="text-base font-bold text-neutral-600">{seat.id}</h6>
                                            <MdOutlineChair
                                                className={`text-3xl -rotate-90 ${getSeatName(seat)}`} // Template literals for dynamic class names
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Second row */}
                                <div className="grid justify-end w-full h-auto grid-cols-9 gap-x-5">
                                    {busSeatData.slice(9, 18).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className="flex items-center gap-x-0"
                                            onClick={() => handleSeatClick(seat.id)}
                                        >
                                            <h6 className="text-base font-bold text-neutral-600">{seat.id}</h6>
                                            <MdOutlineChair
                                                className={`text-3xl -rotate-90 ${getSeatName(seat)}`} // Template literals for dynamic class names
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Third row */}
                                <div className="grid justify-end w-full h-auto grid-cols-10 gap-x-5">
                                    <div className="col-span-9"></div>
                                    {busSeatData.slice(18, 19).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className="flex items-center gap-x-0"
                                            onClick={() => handleSeatClick(seat.id)}
                                        >
                                            <h6 className="text-base font-bold text-neutral-600">{seat.id}</h6>
                                            <MdOutlineChair
                                                className={`text-3xl -rotate-90 ${getSeatName(seat)}`} // Template literals for dynamic class names
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Fourth row */}
                                <div className="grid justify-end w-full h-auto grid-cols-9 gap-x-5">
                                    {busSeatData.slice(19, 28).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className="flex items-center gap-x-0"
                                            onClick={() => handleSeatClick(seat.id)}
                                        >
                                            <h6 className="text-base font-bold text-neutral-600">{seat.id}</h6>
                                            <MdOutlineChair
                                                className={`text-3xl -rotate-90 ${getSeatName(seat)}`} // Template literals for dynamic class names
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Fifth row */}
                                <div className="grid justify-end w-full h-auto grid-cols-9 gap-x-5">
                                    {busSeatData.slice(28, 37).map((seat) => (
                                        <div
                                            key={seat.id}
                                            className="flex items-center gap-x-0"
                                            onClick={() => handleSeatClick(seat.id)}
                                        >
                                            <h6 className="text-base font-bold text-neutral-600">{seat.id}</h6>
                                            <MdOutlineChair
                                                className={`text-3xl -rotate-90 ${getSeatName(seat)}`} // Template literals for dynamic class names
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>


                    </div>

                    {/* reservation info */}
                    <div className="flex items-center justify-center w-full gap-6 pt-5 border-t border-neutral-200">
                                    
                    </div>

                </div>

            </div>
            {/* Seat selection action */}
            <div className="w-full col-span-2 px-6 py-4 space-y-5 border shadow-sm bg-neutral-50 rounded-xl border-neutral-200">

            </div>
            {/* Show the error message if more than 10 seats are selected */}
        </div>
    )
}

export default BusSeat