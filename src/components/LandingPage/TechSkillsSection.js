import skillIcon1 from "../../images/LandingPage/skill-icon1.png";
import skillIcon2 from "../../images/LandingPage/skill-icon2.png";
import skillIcon3 from "../../images/LandingPage/skill-icon3.png";
import skillIcon4 from "../../images/LandingPage/skill-icon4.png";
import Card from "../common/Card";
import { Link } from "react-router-dom";

function TechSkillsSection()
{
    const content = [
        {
            icon: skillIcon1,
            heading: "AI + Data",
            content: "Work smarter (not harder) with artificial intelligence and keep up with Sage AI and more in this rapidly growing tech field.",
            link: "Generate AI skills"
        },
        {
            icon: skillIcon2,
            heading: "Software dev",
            content: "Build fluency in languages like C#, Java, Angular, and JavaScript and keep evolving as they do to develop efficiently.",
            link: "Speak software dev"
        },
        {
            icon: skillIcon3,
            heading: "Cloud + IT Ops",
            content: "From AWS to Google Cloud and everything in between, expand your cloud clout for down-to-earth professional returns.",
            link: "Conquer the cloud"
        },
        {
            icon: skillIcon4,
            heading: "Security",
            content: "Stop cyber attacks in their tracks and secure critical skills to position yourself as the expert at keeping data under lock and key.",
            link: "Lock down security learning"
        }
    ];
    return <div className="bg-[#F4F7FA] w-full h-96 flex gap-1 justify-center items-center mt-44">
        {content.map(({icon, heading, content, link, idx}) => (
            <Card key={idx} className="flex flex-col items-start gap-6 w-[17rem] h-72 p-4">
                <img src={icon} alt={heading} className="rounded-lg w-10"/>
                <h2 className="text-2xl font-medium">{heading}</h2>
                <p className="text-justify text-gray-500/75 text-sm pr-2">{content}</p>
                <Link to="" className="text-[#8C52FF] font-medium"><span className="mr-1">{link}</span><span>&gt;</span></Link>
            </Card>  
        ))}
    </div>
}


export default TechSkillsSection;