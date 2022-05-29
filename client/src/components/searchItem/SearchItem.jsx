import React from 'react'
import { Link } from 'react-router-dom'
import "./searchItem.css"

const SearchItem = ({ item }) => {
  return (
    <div className='searchItem'>
      <img src={item.images[0]} alt=""
        className='siImg'
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">No taxi :(</span>
        <span className="siSubtitle">Studio hot, sorry kid</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">300€ fee for cancellation</span>
      </div>

      <div className="siDetails">
        {item.rating &&
          <div className="siDetRat">
            <div className="skata">
              <span>Wonderful</span>
              <label>1,445 reviews</label>
            </div>
            <button className='siDetailsButton'>{item.rating}</button>
          </div>}
        <div className="siDetPrice">
          <span>{item.cheapestPrice}€</span>
          <label>Does not include taxes idoit</label>
          <Link to={`/hotels/${item._id}`}>
            <button className="siButton">Check Availability</button>
          </Link>

        </div>
      </div>
    </div>



  )
}

export default SearchItem