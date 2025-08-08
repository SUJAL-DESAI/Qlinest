const ServiceFilterBar = () => {
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");

  const resetFilters = () => {
    setSearch("");
    setprice("");
    setPlace("");
    setDate("");
  };

  return (
    <div className="bg-[#12131a] text-white py-6 px-4 md:px-8 rounded-xl mt-12 shadow-lg flex flex-col md:flex-row gap-4 items-center justify-center">
      {/* Search Input */}
      <div className="flex items-center bg-[#2c2d34] rounded-lg px-4 py-2 w-full md:w-auto">
        <Search className="mr-2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search for an artist, a genre, a show..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
        />
      </div>

      {/* Kind Dropdown */}
      <select
        value={price}
        onChange={(e) => setprice(e.target.value)}
        className="bg-[#2c2d34] text-white px-4 py-2 rounded-lg border-none focus:outline-none"
      >
        <option value="">price</option>
        <option value="home">Home Cleaning</option>
        <option value="deep">Deep Cleaning</option>
        <option value="window">Window Cleaning</option>
      </select>

      {/* Place Dropdown */}
      <select
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className="bg-[#2c2d34] text-white px-4 py-2 rounded-lg border-none focus:outline-none"
      >
        <option value="">Place</option>
        <option value="nyc">New York</option>
        <option value="la">Los Angeles</option>
        <option value="sf">San Francisco</option>
      </select>

      {/* Date Dropdown */}
      <select
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="bg-[#2c2d34] text-white px-4 py-2 rounded-lg border-none focus:outline-none"
      >
        <option value="">Date</option>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="weekend">This Weekend</option>
      </select>

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="text-gray-300 hover:text-white transition-all"
        title="Reset Filters"
      >
        <X size={20} />
      </button>
    </div>
  );
};
