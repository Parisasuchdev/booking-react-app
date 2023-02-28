import "./featured.css";
import Karachi1 from '../../images/featured/1.jpg';
import Karachi2 from '../../images/featured/2.jpg';
import Karachi3 from '../../images/featured/3.jpg';



const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={Karachi1}
          alt=""
          className="featuredImg"
          
          
        />
        <div className="featuredTitles">
          <h1>Clifton</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
      <img src={Karachi2} alt="" className="featuredImg" />

        <div className="featuredTitles">
          <h1>Shahra-e-faisal</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={Karachi3}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Saddar</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
