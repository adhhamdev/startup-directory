
import { useState } from "react";
const Searchbar = ({startups, handleSearch}) => {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className="flex flex-row mx-4 gap-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search..."
                value={search}
                onChange={(e) => handleChange}
            />
            <button
                onClick={() => handleSearch(search)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search
            </button>
        </div>
    );
}

export default Searchbar;