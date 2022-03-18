import { Link } from "react-router-dom";
import fourohfourimage from "../../Img-Assets/brie-404-page-image.png";
import "./style.css";

const FourOhFourPage = () => {
    return (
        <div className="four-oh-four">
            <div className="container row">
                <div className="fof-cols">
                    <h2 className="heading1">WHOOPS!</h2>
                    <p className="body-text content-404">
                        It looks like it's a little windy around here. The link or content on this page may have blown away.
                    </p>
                    <Link to="/">
                        <button className="btn btn-404">Return to Homepage</button>
                    </Link>
                </div>
                <div className="fof-cols">
                    <img src={fourohfourimage} alt="" className="fof-img" />
                </div>
            </div>
        </div>
    );
}
 
export default FourOhFourPage;