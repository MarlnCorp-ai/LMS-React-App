import iso9001 from "../../images/Logos/ISO-9001.png";
import iso20000 from "../../images/Logos/ISO-20000.png";
import iso27001 from "../../images/Logos/ISO-27001.png";
import fda from "../../images/Logos/fda.png";
import gdpr from "../../images/Logos/gdpr.png";
import security from "../../images/Logos/security.png";
import women_s_business from "../../images/Logos/women's business.png";

function Compliances()
{
    const badges = [
        {
            image: iso9001,
            altText: "ISO 9001"
        },
        {
            image: iso27001,
            altText: "ISO 27001"
        },
        {
            image: iso20000,
            altText: "ISO 20000"
        },
        {
            image: security,
            altText: "Security"
        },
        {
            image: fda,
            altText: "FDA"
        },
        {
            image: gdpr,
            altText: "GDPR"
        },
        {
            image: women_s_business,
            altText: "Women Owned Businesses"
        }
    ];

    return <div className="flex gap-8 justify-center mb-12 mt-20">
        {badges.map(({image, altText}, idx) => (
            <img src={image} alt={altText} className="h-28"/>
        ))}
    </div>
}

export default Compliances;