import React from 'react'
import useFetch from '../../hooks/useFetch.js';
import "./featured.css";
import arta from "C:/Users/kimon/Desktop/react tries/backend/client/src/pictures/arta.png"
import athina from "C:/Users/kimon/Desktop/react tries/backend/client/src/pictures/athens.png"
import chania from "C:/Users/kimon/Desktop/react tries/backend/client/src/pictures/chania.png"
import nafplio from "C:/Users/kimon/Desktop/react tries/backend/client/src/pictures/nafplio.png"

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=arta,giannena")


    return (
        <div className="featured">
            {loading ? ("Loading please wait") : (
                <>
                    <div className="featuredItem">
                        <img src={arta} alt="" className='featuredImg' />
                        <div className="featuredTitles">
                            <h1>Arta</h1>
                            <h2>{data[0]} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={athina} alt="" className='featuredImg' />
                        <div className="featuredTitles">
                            <h1>Athens</h1>
                            <h2>76 Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={chania} alt="" className='featuredImg' />
                        <div className="featuredTitles">
                            <h1>Giannena</h1>
                            <h2>{data[1]} Properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src={nafplio} alt="" className='featuredImg' />
                        <div className="featuredTitles">
                            <h1>Nafplio</h1>
                            <h2>30 Properties</h2>
                        </div>
                    </div></>)}
        </div>
    )
}

export default Featured