import "./featuredProperties.css";
import PC from "../../images/hotels/1.jpg"
import dream from "../../images/hotels/2.jpeg"
import regent from "../../images/hotels/3.jpg"
import moven from "../../images/hotels/4.jpeg"


const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={PC}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Pearl Continental</span>
        <span className="fpCity">Civil Lines</span>
        <span className="fpPrice">Starting from 20,000 PKR</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={dream}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Dream World Resort</span>
        <span className="fpCity">Gulshan-e-Maymar</span>
        <span className="fpPrice">Starting from 10,000 PKR</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={regent}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Regent Plaza</span>
        <span className="fpCity">Shahrah-e-Faisal</span>
        <span className="fpPrice">Starting from 14,000 PKR</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={moven}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mövenpick</span>
        <span className="fpCity">Karachi</span>
        <span className="fpPrice">Starting from 16,000 PKR</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
