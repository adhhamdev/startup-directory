import { useState } from "react";
const Dropdown = ({ industriesList, selectedIndustry, setSelectedIndustry }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(prev => !prev);
    const [search, setSearch] = useState("");
    const distinctIndustries = industriesList.filter((value, index, self) => {
        const lowerCaseValue = value.toLowerCase();
        return self.findIndex(item => item.toLowerCase() === lowerCaseValue) === index;
    });

    const handleSelect = (industry) => {
        setSelectedIndustry(industry);
        setIsOpen(false);
    }

    const DropdownItem = ({ industry, handleSelect }) => {
        return (
            <button
                type="button"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 w-full text-left"
                onClick={() => handleSelect(industry)}
            >
                {industry}
            </button>
        );
    }

    const renderIndustries = () => {
        let list;
        if (search) {
            list = distinctIndustries.filter(industry => industry.toLowerCase().includes(search.toLowerCase())).map((industry, index) => (
                <DropdownItem key={index} industry={industry} handleSelect={handleSelect} />
            ))
        } else {
            list = distinctIndustries.map((industry, index) => (
                <DropdownItem key={index} industry={industry} handleSelect={handleSelect} />
            ))
        }
        return list
    }

    return (
        <div>
            <div className="relative inline-block text-left">
                <button title="Category" type="button" id="dropdownBtn" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none overflow-ellipsis whitespace-nowrap " onClick={toggleDropdown}>
                    {selectedIndustry || "Category"}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute left-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto h-96">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div className="relative text-gray-600">
                                <input type="search" name="search" id="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                                    </svg>
                                </button>
                            </div>
                            <hr />
                            <button
                                type="button"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 w-full text-left"
                                onClick={() => {
                                    setSelectedIndustry("All")
                                    setIsOpen(false)
                                }}
                            >
                                All
                            </button>
                            {renderIndustries()}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown;