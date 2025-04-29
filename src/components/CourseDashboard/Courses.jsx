import { Link } from "react-router-dom";

function Courses({courseOptions})
{
    const courseOptionDesigner = ( {type, topic, author, libraries, stats}, idx) => (
        <Link to="/courses/1">
        <section key={idx} className="bg-white divide-x divide-gray-200 w-[50rem] h-40 flex mt-4 items-center p-4 text-gray-500 rounded-lg shadow shadow-sm hover:shadow-md cursor-pointer">
            <main className="w-3/4 flex flex-col gap-4 text-xs">
                <header>
                    { type==="Course" && <p className="font-bold">▶️  {type}</p>}
                    { type==="Lab" && <p className="font-bold">🔬  {type}</p>}
                </header>
                <main>
                    <h2 className="text-base font-bold text-black mb-3">{topic}</h2>
                    {/* <p className="text-sm">by {author}</p> */}
                </main>
                <footer className="flex gap-3 items-center">
                    <p className="font-bold">Libraries: ⓘ </p>
                    {libraries.map((library, libIdx) => (
                        <div key={`${idx}-${libIdx}`} className="w-18 rounded-full text-center py-auto text-[0.6rem] border p-1">{library}</div>
                    ))}
                </footer>
            </main>
            <aside className="w-1/4 flex flex-col gap-2 pl-4 text-sm">
                <section className="flex">📊 &nbsp;&nbsp;{stats.level}</section>
                <section>🕓 &nbsp;&nbsp;{stats.duration}</section>
                <section>🗓️ &nbsp;&nbsp;{stats.publishedDate}</section>
                <section><span className="text-yellow-400">{stats.rating.split(" ")[0]}</span> {stats.rating.split(" ")[1]}</section>
            </aside>
        </section>
        </Link>
    );

    return <div className={`flex flex-col max-w-[50rem]`}>
        {courseOptions.map(courseOptionDesigner)}
    </div>
}

export default Courses;