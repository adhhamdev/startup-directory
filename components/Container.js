"use client"

import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Searchbar from "@/components/Searchbar";
import ChoiceChips from "./ChoiceChips";

const Container = ({ startups, searchQuery, industries, investmentTypes }) => {
    const [search, setSearch] = useState("");
    const [startupsList, setStartupsList] = useState(startups || []);
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [selectedInvestmentType, setSelectedInvestmentType] = useState("All");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const industriesList = industries || [];
    const investmentTypesList = investmentTypes || [];

    const handleSearch = async () => {
        if (search) {
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

    const renderStartups = () => {
        let list;
        const firstCondition = selectedIndustry == "All" && selectedInvestmentType == "All" ? true : false;
        const secondCondition = selectedIndustry == "All" || selectedInvestmentType == "All" ? true : false;
        const thirdCondition = selectedIndustry == "All" && selectedInvestmentType == "All" ? false : true;
        if (firstCondition) {
            list = startupsList.map((startup) => (
                <Card key={startup._id} startup={startup} />
            ))
        }
        else if (secondCondition) {
            if (selectedIndustry == "All") {
                list = startupsList.filter(startup => startup.InvestmentType == selectedInvestmentType).map((startup) => (
                    <Card key={startup._id} startup={startup} />
                ))
            } else {
                list = startupsList.filter(startup => startup.IndustryVertical == selectedIndustry).map((startup) => (
                    <Card key={startup._id} startup={startup} />
                ))
            }
        }
        else if (thirdCondition) {
            list = startupsList.filter(startup => startup.IndustryVertical == selectedIndustry && startup.InvestmentType == selectedInvestmentType).map((startup) => (
                <Card key={startup._id} startup={startup} />
            ))
        }
        return list
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
            />
            <div className="flex my-2">
                <div className="flex flex-row mx-4 gap-4">
                    <Dropdown industriesList={industriesList} selectedIndustry={selectedIndustry} setSelectedIndustry={setSelectedIndustry} />
                    <ChoiceChips investmentTypesList={investmentTypesList} selectedInvestmentType={selectedInvestmentType} setSelectedInvestmentType={setSelectedInvestmentType} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {!loading && renderStartups()}
            </div>
            <Modal />
        </div>
    );
}

export default Container;