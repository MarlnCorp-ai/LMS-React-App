import poster1 from "../../images/LandingPage/Poster1.png";
import poster2 from "../../images/LandingPage/Poster2.png";
import poster3 from "../../images/LandingPage/Poster3.png";
import poster4 from "../../images/LandingPage/Poster4.png";

function Posters()
{
    return <div className="mb-40">
        <img src={poster1} alt="Poster1" />
        <img src={poster2} alt="Poster2" />
        <img src={poster3} alt="Poster3" />
        <img src={poster4} alt="Poster4" />
    </div>
}

export default Posters;