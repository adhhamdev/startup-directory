"use client"
import { useState } from "react";

const Searchbar = ({startups}) => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState(startups || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setResults([]);
        const res = mongoose;
        if (res.length === 0) {
            setError("No results found");
        }
        setResults(res);
        setLoading(false);
    }

    return (
        <div className="flex flex-row mx-4 gap-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search
            </button>
        </div>
    );
}

export default Searchbar;