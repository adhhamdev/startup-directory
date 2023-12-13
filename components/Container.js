"use client"

import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Searchbar from "@/components/Searchbar";

const Container = ({ startups, searchQuery }) => {
    const [search, setSearch] = useState("");
    const [startupsList, setStartupsList] = useState(startups || []);
    const [selectedDropdown, setSelectedDropdown] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [industry, setIndustry] = useState(null);
    const handleSearch = async () => {
        if(search) {
            try {
                setLoading(true)
                setError("")
                const res = await searchQuery(search);
                console.log(res);
                setStartupsList(res);
                setLoading(false)
            } catch (error) {
                console.error(error);
                setError("Something went wrong. Please try again.")
            }
        
        } else {
            return;
        }
    }
    return (
        <div>
            <Searchbar
                handleSearch={handleSearch}
                startupsList={startupsList}
                search={search}
                setSearch={setSearch}
                setStartupsList={setStartupsList}
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
                industry={industry}
                setIndustry={setIndustry}
            />
            <div className="flex my-2">
                <div className="flex flex-row mx-4 gap-4">
                    <Dropdown industry={industry} setIndustry={setIndustry} selectedDropdown={selectedDropdown} setSelectedDropdown={setSelectedDropdown} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        All
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        SaaS
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Mobile
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Web
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Blockchain
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        AI
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {!loading && startupsList.map((startup) => (
                    <Card key={startup._id} startup={startup} />
                ).filter((startup) => startup.industryVertical === industry))}
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
            <Modal />
        </div>
    );
}

export default Container;