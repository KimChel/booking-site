import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { faLocation, faMapPin, faPenNib, faFamily } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Hotel = () => {



  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="slider"></div>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="hotelWrapperTop">
            <div className="hotelWrapperTitle">
              <h1 className="hotelTitle">Grand Cunt Hotel</h1>
              <div className="hotelLocation">
                <FontAwesomeIcon icon={faMapPin} className="LocationPin"></FontAwesomeIcon>
                <h2 className="hotelLocation">Athina 152 menelaou</h2>
              </div>
            </div>

            <div className="hotelRating">
              <span>Rating</span>
              <button>9.2</button>
            </div>
          </div>
          <div className="hotelWrapperImages">
            <div className="topImages">
              <div className="mediumImages">
                <img className="medImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277348801.jpg?k=3906041f861dade93fc1e2de065f8309e818fbe7448a2fc42986c8d5c829226a&o=&hp=1" alt="" />
                <img className="medImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277365415.jpg?k=c86a0628913c849d37a37caef319e03ebdef4d7c3acec0ed3e793c7143ea161d&o=&hp=1" alt="" />
              </div>
              <div className="bigImages">
                <img className="bigImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277369566.jpg?k=57d080c9c9d07cd236ad1da338826c4d7e17a42ab768865d74227d4d5d23e2c4&o=&hp=1" alt="" />
              </div>
            </div>
            <div className="smallImages">
              <img className="smlImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277364531.jpg?k=10f21ba1e915d5343dd204d29720466732cb6063fddeed4fa40cddb784807510&o=&hp=1" alt="" />
              <img className="smlImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277380699.jpg?k=16563b40125a39aaae39037267450a4fe4647d7e5ebdb16b1b4102c1a275a1d3&o=&hp=1" alt="" />
              <img className="smlImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/95440157.jpg?k=f7c4ce2ed643358c78c5faf0a153bcfdf48782bf3bf9a227fca0c67a34d08f1b&o=&hp=1" alt="" />
              <img className="smlImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/277345978.jpg?k=9b4fc51ce6f3068e7eae29ceadb2b7939140fe410b4f2b38bdef218e7e8d1a14&o=&hp=1" alt="" />

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
                  <FontAwesomeIcon icon="fa-solid fa-wifi" />
                  <span>Free WiFi</span>
                </div>
                <div className="hotelCharacteristicsItems">
                  <span>Family rooms</span>
                </div>
                <div className="hotelCharacteristicsItems">
                  <FontAwesomeIcon icon="fa-solid fa-clock" />
                  <span>24-hour front desk</span>
                </div>
                <div className="hotelCharacteristicsItems">
                  <FontAwesomeIcon icon="fa-solid fa-ban-smoking" />
                  <span>Non-smoking rooms</span>  
                </div>
                <div className="hotelCharacteristicsItems">
                  <FontAwesomeIcon icon="fa-solid fa-martini-glass-citrus" />
                  <span>Bar</span>  
                </div>
              </div>
            </div>
            <div className="hotelReservePanel">
              <h2 className="hotelPanelTitle">Perfect for a 9-night stay!</h2>
              <span className="hotelPanelDits">Located in the real heart of Patra, this property has an excellent location score of 9.2</span>
              <div className="hotelPanelPriceRes">
              <span className="hotelPanelPrice">100000€ (1 night)</span>
              <button className="hotelPanelReserve">Reserve or Book now!</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  )
}
