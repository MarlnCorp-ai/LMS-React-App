import SideBar from "../components/common/SideBar";
import SageChat from "../components/Sage/SageChat";


function SageAIPage()
{
    return <div className="relative">
        <aside className="fixed top-0 left-0 w-1/5">
            <SideBar />
        </aside>
        <main className="w-4/5 ml-[21rem] h-screen">
            <SageChat />
        </main>
    </div>
}

export default SageAIPage;