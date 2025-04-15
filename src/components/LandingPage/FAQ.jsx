import faqImage from "../../images/LandingPage/FAQ.png";
import securityBanner from "../../images/LandingPage/Security.png";

function FAQ()
{
    return <div>
        <img src={faqImage} alt="Frequently Asked Questions" className="mt-12"/>
        <img src={securityBanner} alt="Security Banner" className="h-32 mx-auto mt-12"/>
        </div>
}

export default FAQ;