
const Searchbar = ({ reset, handleSearch, search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form className="flex flex-row mx-4 gap-4" action={handleSearch}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
          aria-label="Search"
          autoFocus
        />
        <button type="reset" className="border border-blue-500 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded" onClick={reset}>Reset</button>
        <button
          aria-label="Search Button"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;