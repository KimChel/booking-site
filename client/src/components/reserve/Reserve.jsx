import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import "./reserve.css"

const Reserve = ({ setOpen, hotelId }) => {

    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`)
    const [selectedRooms, setSelectedRooms] = useState([])
    const { dates } = useContext(SearchContext)

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value))
    }

    const getRangeOfDates = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime())

        const dates = []

        while (date <= end) {
            dates.push(new Date(date).getDate())
            date.setDate(date.getDate() + 1)
        }

        return dates;
    }


    const allDates = (getRangeOfDates(dates[0].endDate, dates[0].startDate))

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date =>
            allDates.includes(new Date(date).getTime())
        )
        return !isFound
    }



    const handleClick = async () => {
//         try {
//             await Promise.all(selectedRooms.map(roomId) => {
//     const res = axios.put("")
//             })
//         }catch (err) {

// }
    }

return (
    <div className='reserve'>
        <div className="reserveContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="reserveClose" onClick={() => setOpen(false)} />
            <span>Select your rooms</span>
            {
                data.map(item => (
                    <div className="reserveRoom">
                        <div className="reserveItemInfo">
                            <div className="reserveTitle">{item.title}</div>
                            <div className="reserveDesc">{item.desc}</div>
                            <div className="reserveMax">Maximum occupancy: <b>{item.maxPeople}</b></div>
                            <div className="reservePrice"></div>
                        </div>
                        {item.roomNumbers.map((roomNumber) => (
                            <div className="roomNumbers">
                                <label>{roomNumber.number}</label>
                                <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)} />
                            </div>
                        ))}
                    </div>
                ))}
            <button onClick={handleClick} className="reserveButton">
                Reserve now
            </button>
        </div>
    </div>
)
}

export default Reserve