function CountryDropdown({ handleCurrencyUpdate }) {
  const currencyOptions = [
    ["USD", "🇺🇸 US Dollars", 1, "$"],
    ["SAR", "🇸🇦 Saudi Riyals", 3.75, "SR"],
    ["EGP", "🇪🇬 Egyptian Pounds", 50.57, "E£"],
    ["AED", "🇦🇪 UAE Dirham", 3.67, "DH"],
    ["GBP", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Pound sterling", 0.77, "£"],
    ["EUR", "🇪🇺 Euro", 0.93, "€"],
    ["ZAR", "🇿🇦 South African Rand", 18.39, "R"],
    ["BHD", "🇧🇭 Bahrainian Dinar", 0.38, "BD"],
  ];

  return (
    <select
      name="country"
      onChange={({target}) => handleCurrencyUpdate(currencyOptions, target)}
      className="border-2 h-12 w-52 rounded-xl bg-purple-100 shadow-md"
    >
      {currencyOptions.map(([code, label], idx) => (
        <option value={code} key={idx}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default CountryDropdown;
