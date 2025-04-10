function Results({ noOfResults }) {
  return (
    <div className="flex flex-row justify-between w-1/2">
      <p className="text-sm text-gray-600">Showing {noOfResults} results</p>
      <div className="flex gap-2">
        <p className="text-xs pt-2 text-gray-400">Sort by</p>
        <div className="border border-gray-300 rounded-full bg-white text-center w-36 flex justify-center gap-4 text-gray-500 text-[0.9rem] h-8 items-center">
          Relevance{" "}
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </div>
    </div>
  );
}

export default Results;
