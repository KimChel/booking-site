import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./list.css"
import { useState } from 'react'
import format from 'date-fns/format'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(`/api/hotels?city=${destination}&min=${minPrice || 0}&max=${maxPrice || 999}`)

  const handleClick = () => {
    reFetch()
  }


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Seartch</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input type="text" className="lsDest" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label >Check-In Dates</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate &&
                (<DateRange
                  onChange={item => setDates([item.selection])}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  minDate={new Date()}
                  className="slDate"
                />)}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText" >Min price <small>per night</small></span>
                <input type="number" onChange={e => setMinPrice(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText" >Max price <small>per night</small></span>
                <input type="number" onChange={e => setMaxPrice(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adults price</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children price</span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.child} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Rooms</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List