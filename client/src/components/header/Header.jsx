import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faBed, faDiceSix, faMusic, faPeopleArrows, faPepperHot, faPerson, faPlug, faPooBolt, faToilet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import "./header.css";
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");

    const { user } = useContext(AuthContext)


    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adult: 1,
            child: 0,
            room: 1
        }
    );

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const { dispatch } = useContext(SearchContext)

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
        navigate("/hotels", { state: { destination, dates, options } });
    }

    const handleClick = () => {
        navigate("/login")
    }


    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faToilet} />
                        <span>Toilets</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlug} />
                        <span>ButtPlugs</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faMusic} />
                        <span>Music</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faDiceSix} />
                        <span>Casino</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                        <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account</p>
                        {!user && <button onClick={handleClick} className="headerBtn">Sign in/Register</button>}
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder="POU PAS?" className="headerSearchInput" onChange={e => setDestination(e.target.value)} />

                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSeatchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && <DateRange
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className="date"
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSeatchText">{`${options.adult} adult | ${options.child} children | ${options.room} rooms`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className="opotionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button disabled={options.child < 1} className="optionCounterButton" onClick={() => handleOption("child", "d")}>-</button>
                                            <span className="opotionCounterNumber">{options.child}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("child", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Rooms</span>
                                        <div className="optionCounter">
                                            <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                            <span className="opotionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                        </div>

                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header