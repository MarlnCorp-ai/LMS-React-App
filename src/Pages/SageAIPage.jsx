import SideBar from "../components/common/SideBar";
import SageChat from "../components/Sage/SageChat";
import banner from "../images/Banners/Banner.png";

function SageAIPage()
{
    return <div className="relative">
        <header
        className="h-80 text-white flex items-center justify-center bg-cover ml-80"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        <h1 className="text-5xl text-center font-bold">Generative AI</h1>
      </header>
        <aside className="fixed top-0 left-0 w-1/5">
            <SideBar />
        </aside>
        <main className="w-4/5 ml-[21rem] h-screen">
            <SageChat />
        </main>
    </div>
}

export default SageAIPage;