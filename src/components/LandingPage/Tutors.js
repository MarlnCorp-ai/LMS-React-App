import { Link } from "react-router-dom";
import tutorImages from "../../images/LandingPage/Tutors.png";

function Tutors()
{
    return <div className="flex items-center  gap-36 justify-center mx-auto w-full tracking-wide">
        <aside><img src={tutorImages} alt="Tutors" className="h-80"/></aside>
        <main className="flex flex-col gap-6">
            <h3 className="text-3xl font-semibold">Premier Industry Experts</h3>
            <h2 className="text-2xl w-[28rem] font-semibold">Stay ahead with insights from top professionals</h2>
            <p className="text-lg text-gray-700 w-[25rem] leading-8 text-justify">Gain knowledge from experienced leaders in the field. Our instructors are carefully selected, with over 91% possessing more than a decade of expertise. Expand your skills with structured learning paths and expert-led guidance tailored to your success.</p>
            <Link to=""><p><span className="mr-4 text-lg font-medium">Explore More</span><span>&gt;</span></p></Link>
        </main>
    </div>
}

export default Tutors;