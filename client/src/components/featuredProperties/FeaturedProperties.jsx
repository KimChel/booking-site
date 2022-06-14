import useFetch from "../../hooks/useFetch.js";
import featuredProperties from "./featuredProperties.css";

const FeaturedProperties = () => {


  const { data, loading, error } = useFetch("/api/hotels?featured=true&limit=5")



  return (
    <div className="fp">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.images[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPric">Starting from {item.cheapestPrice}€</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>{item.desc}</span>
              </div>}
            </div>
          ))}
        </>
      )}

    </div>
  )
}

export default FeaturedProperties