function SearchBar() {
  return (
    <div className="bg-white rounded-full flex flex-row gap-4 w-1/2 h-12 justify-start border border-gray-300">
      <span className="material-symbols-outlined content-center ml-7">search</span>
      <input type="text" className="w-[90%] focus:outline-transparent h-8 my-auto placeholder-gray-500 placeholder:font-bold text-base text-gray-500 font-bold tracking-wide" placeholder="Search"/>
    </div>
  );
}

export default SearchBar;
