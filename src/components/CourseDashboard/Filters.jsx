function Filters() {
  const filterOptions = [
    {
      label: "Libraries",
      subOptions: ["Core Tech", "AI", "Cloud", "Data", "Security"],
    },
    {
      label: "Categories",
      subOptions: [
        "Artificial Intelligence",
        "Business",
        "Cloud",
        "Data",
        "IT Ops",
        "Product & UX",
        "Professional Development",
        "Security",
        "Software Development",
      ],
    },
    {
      label: "Content Type",
      subOptions: ["Course", "Lab"],
    },
    {
      label: "Rating",
      subOptions: [
        "★★★★★  4.5 and up",
        "★★★★☆  4.0 and up",
        "★★★☆☆  3.0 and up",
      ],
    },
    {
      label: "Skill level",
      subOptions: ["Beginner", "Intermediate", "Advanced"],
    },
  ];

  const filterOptionsDesign = (option, index) => (
    <section key={index} className="divide-y divide-gray-400">
      <header className="pb-2 text-base font-medium">{option.label}</header>
      <main className="pt-2 flex flex-col gap-2 text-gray-600">{option.subOptions.map((subOption, subIdx) => (
          <section key={`${index}-${subIdx}`}>
              <input type="checkbox" name={subOption} className="mr-2"/>
              <label htmlFor={subOption}>{subOption}</label>
          </section>    
      ))}</main>
    </section>
  );

  return (
    <div className="max-w-56">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold">Filter</h2>
      </header>
      <main
        className={`grid grid-cols-1 grid-rows-${filterOptions.length} gap-8 w-full text-sm`}
      >
        {filterOptions.map(filterOptionsDesign)}
      </main>
    </div>
  );
}

export default Filters;
