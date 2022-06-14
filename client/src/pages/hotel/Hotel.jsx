import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { faLocation, faMapPin, faPenNib, faFamily } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";


export const Hotel = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  const [open, setOpen] = useState(false)

  const { data, loading, error, } = useFetch(`/api/hotels/find/${path}`)

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()


  const { dates, options } = useContext(SearchContext)

  const calculatePrice = 1000 * 60 * 60 * 24
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const daysDiff = Math.ceil(timeDiff / calculatePrice)
    return daysDiff
  }

  const handleClick = () => {
    if (user) {
      setOpen(true)
    } else {
      navigate("/login")
    }
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            <div className="hotelWrapperTop">
              <div className="hotelWrapperTitle">
                <h1 className="hotelTitle">{data.name}</h1>
                <div className="hotelLocation">
                  <FontAwesomeIcon icon={faMapPin} className="LocationPin"></FontAwesomeIcon>
                  <h2 className="hotelLocation">{data.address}</h2>
                </div>
              </div>
              <div className="hotelRating">
                <span>Rating</span>
                <button>{data.rating}</button>
              </div>
            </div>
            <div className="hotelWrapperImages">
              <div className="topImages">
                <div className="mediumImages">
                  <img className="medImg" src={data.images[0]} alt="" />
                  <img className="medImg" src={data.images[1]} alt="" />
                </div>
                <div className="bigImages">
                  <img className="bigImg" src={data.images[2]} alt="" />
                </div>
              </div>
              <div className="smallImages">
                <img className="smlImg" src={data.images[3]} alt="" />
                <img className="smlImg" src={data.images[4]} alt="" />
                <img className="smlImg" src={data.images[5]} alt="" />
                <img className="smlImg" src={data.images[6]} alt="" />
              </div>
            </div>
            <div className="hotelBottomPage">
              <div className="hotelDetails">
                <div className="hotelDescription">
                  <p>You're eligible for a Genius discount at Mediterranee! To save at this property, all you have to do is sign in.</p>
                  <p>Featuring a bar, Mediterranee is located in the center of Patra, a 9-minute walk from Psila Alonia Square. The property is close to Patras Port, Roman Theater of Patras and Patras Castle.</p>
                  <p>Offering a private bathroom fitted with a bath or shower and a hairdryer, all air-conditioned rooms at the hotel also have free WiFi.</p>
                  <p>A buffet breakfast can be enjoyed at the property. Guests may relax by the bar with refreshing drinks or a tasty cup of coffee.</p>
                  <p>Staff speak German and Greek at the 24-hour front desk.</p>
                  <p>The hotel location offers easy access to all means of transportation. Archaeological Museum of Patras is 1.4 mi from Mediterranee. The nearest airport is Araxos Airport, 18 mi from the accommodations.</p>
                </div>
                <span className="hotelSpecDits">Mediterranee has been welcoming Booking.com guests since May 21, 2009</span>
                <div className="hotelCharacteristics">
                  <span>Most popular facilities</span>
                  <div className="hotelCharacteristicsItems">
                    {/* <FontAwesomeIcon icon="fa-solid fa-wifi" /> */}
                    <span>Free WiFi</span>
                  </div>
                  <div className="hotelCharacteristicsItems">
                    <span>Family rooms</span>
                  </div>
                  <div className="hotelCharacteristicsItems">
                    {/* <FontAwesomeIcon icon="fa-solid fa-clock" /> */}
                    <span>24-hour front desk</span>
                  </div>
                  <div className="hotelCharacteristicsItems">
                    {/* <FontAwesomeIcon icon="fa-solid fa-ban-smoking" /> */}
                    <span>Non-smoking rooms</span>
                  </div>
                  <div className="hotelCharacteristicsItems">
                    {/* <FontAwesomeIcon icon="fa-solid fa-martini-glass-citrus" /> */}
                    <span>Bar</span>
                  </div>
                </div>
              </div>
              <div className="hotelReservePanel">
                <h2 className="hotelPanelTitle">Perfect for a {days}-night stay!</h2>
                <span className="hotelPanelDits">Located in the real heart of Patra, this property has an excellent location score of 9.2</span>
                <div className="hotelPanelPriceRes">
                  <span className="hotelPanelPrice">{days * data.cheapestPrice * options.room}€ ({days} nights)</span>
                  <button onClick={handleClick} className="hotelPanelReserve">Reserve or Book now!</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      )}
      {open && <Reserve setOpen={setOpen} hotelId={path} />}
      <MailList />
      <Footer />
    </div>
  )
}