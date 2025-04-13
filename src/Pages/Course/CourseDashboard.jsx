import SearchBar from "../../components/CourseDashboard/SearchBar";
import Filters from "../../components/CourseDashboard/Filters";
import Courses from "../../components/CourseDashboard/Courses";
import Results from "../../components/CourseDashboard/Results";
import SideBar from "../../components/common/SideBar";
import Sage from "../../components/common/Sage";

function CourseDashboard() {
  return (
    <div className="relative ">
      <aside className="fixed top-0 left-0">
        <SideBar />
      </aside>
      <main className="flex flex-col justify-between content-center bg-[#F4F7FA] h-full w-full gap-32 pb-12">
        <header className="w-full mt-28">
          <h1 className="text-center font-bold font-sans text-3xl max-w-[32rem] mx-auto leading-8">
            Thousands of courses authored by our network of industry experts
          </h1>
        </header>
        <div className="flex flex-col gap-8 w-full items-center">
          <SearchBar />
          <div className="flex flex-col gap-6 w-full items-center">
            <Results noOfResults={8} />
            <div className="flex flex-row gap-12">
              <Filters />
              <Courses />
            </div>
          </div>
        </div>
      </main>
      <Sage />
    </div>
  );
}

export default CourseDashboard;
