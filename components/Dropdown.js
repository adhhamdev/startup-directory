"use client"
import { useState } from "react";
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const toggleDropdown = () => setIsOpen(prev => !prev);
    const handleSelect = (item) => {
        setSelected(item);
        setIsOpen(false);
    }
    const items = [
        {id: 0, value: "All"},
        { id: 1, value: "SaaS" },
        { id: 2, value: "Mobile" },
        { id: 3, value: "Web" },
        { id: 4, value: "Blockchain" },
        { id: 5, value: "AI" },
    ];

    const DropdownItem = ({ item, handleSelect }) => {
        return (
            <button
                type="button"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                onClick={() => handleSelect(item)}
            >
                {item.value}
            </button>
        );
    }


    return (
        <div>
            <div className="relative inline-block text-left w-36">
                <button type="button" id="dropdownBtn" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4     py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" onClick={toggleDropdown}>
                    {selected ? selected.value : "Category"}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {items.map(item => (
                                <DropdownItem key={item.id} item={item} handleSelect={handleSelect} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown;