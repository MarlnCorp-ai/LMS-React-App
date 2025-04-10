function Courses()
{
    const courseOptions = [
        {
            type: "Course",
            topic: "Leveraging Parallel Streams for Fast Data Processing in Java 8",
            author: "Jose Paumard",
            libraries: ["Core Tech"],
            stats: {
                level: "Intermediate",
                duration: "2h 12m 57s",
                publishedDate: "30 Jun 2022",
                rating: "⭐️⭐️⭐️⭐️⭐️ (51)"
            }
        },
        {
            type: "Course",
            topic: "Using GitOps to Automate Kubernetes Deployments with Flux 2",
            author: "Nigel Brown",
            libraries: ["Core Tech"],
            stats: {
                level: "Advanced",
                duration: "2h 53m 39s",
                publishedDate: "23 Sep 2022",
                rating: "⭐️⭐️⭐️⭐️⭐️ (24)"
            }
        },
        {
            type: "Course",
            topic: "Optimizing Apache Spark on Databricks",
            author: "Janani Ravi",
            libraries: ["Cloud", "Data"],
            stats: {
                level: "Beginner",
                duration: "2h 32m",
                publishedDate: "03 Nov 2021",
                rating: "⭐️⭐️⭐️⭐️ (27)"
            }
        },
        {
            type: "Course",
            topic: "Emotional Intelligence for the Remote Worker",
            author: "Heather Ackmann",
            libraries: ["Core Tech"],
            stats: {
                level: "Advanced",
                duration: "1h 15m 47s",
                publishedDate: "19 Feb 2021",
                rating: "⭐️⭐️⭐️⭐️ (30)"
            }
        },
        {
            type: "Lab",
            topic: "Classify Images of Clouds in the Cloud wiht AutoML Images",
            author: "Google Cloud",
            libraries: ["AI", "Cloud"],
            stats: {
                level: "Intermediate",
                duration: "1h 12m",
                publishedDate: "21 Mar 2022",
                rating: "⭐️⭐️⭐️⭐️⭐️"
            }
        },
        {
            type: "Lab",
            topic: "Modularizing LookML Code with Extends",
            author: "Google Cloud",
            libraries: ["Cloud"],
            stats: {
                level: "Intermediate",
                duration: "1h 0m",
                publishedDate: "23 Jun 2022",
                rating: "⭐️⭐️⭐️⭐️⭐️ (133)"
            }
        },
        {
            type: "Lab",
            topic: "Create a Cosmetic Anomaly Detection Model using Visual Inspection AI",
            author: "Google Cloud",
            libraries: ["AI", "Cloud"],
            stats: {
                level: "Intermediate",
                duration: "1h 0m",
                publishedDate: "21 Mar 2024",
                rating: "⭐️⭐️⭐️⭐️⭐️"
            }
        },
        {
            type: "Lab",
            topic: "Authentication, Authorization, and identity with Vault",
            author: "Google Cloud",
            libraries: ["Cloud"],
            stats: {
                level: "Beginner",
                duration: "30m",
                publishedDate: "21 Mar 2022",
                rating: "⭐️⭐️⭐️⭐️"
            }
        }
    ]

    const courseOptionDesigner = ( {type, topic, author, libraries, stats}, idx) => (
        <section key={idx} className="bg-white divide-x divide-gray-200 w-[50rem] h-40 flex items-center p-4 text-gray-500 rounded-lg shadow shadow-sm hover:shadow-md cursor-pointer">
            <main className="w-3/4 flex flex-col gap-4 text-xs">
                <header>
                    { type==="Course" && <p className="font-bold">▶️  {type}</p>}
                    { type==="Lab" && <p className="font-bold">🔬  {type}</p>}
                </header>
                <main>
                    <h2 className="text-base font-bold text-black mb-1">{topic}</h2>
                    <p className="text-sm">by {author}</p>
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
                <section>{stats.rating}</section>
            </aside>
        </section>
    );

    return <div className={`grid grid-cols-1 grid-rows-${courseOptions.length} gap-5 max-w-[50rem]`}>
        {courseOptions.map(courseOptionDesigner)}
    </div>
}

export default Courses;