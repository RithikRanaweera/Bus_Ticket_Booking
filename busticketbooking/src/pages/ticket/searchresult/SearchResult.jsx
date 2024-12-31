import React from 'react'
import TicketCard from '../../../components/ticket/TicketCard'
import { FaBus } from 'react-icons/fa6'

const SearchResult = () => {
  return (
    <div className='w-full col-span-3 space-y-10 pt-11'>
        <div className="space-y-6">
          <TicketCard icon={FaBus} busName={"CTB Bus"} routeFrom={"Matara"} routeTo={"Galle"} arrivalTime={"10:00"} departureTime={"11:30"} price={"180"} availableSeats={"15"} />  
        </div>
    </div>
  )
}

export default SearchResult