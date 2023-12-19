'use client';

import { useState } from 'react';
import Dropdown from '@/components/Dropdown';
import Card from '@/components/Card';
import Searchbar from '@/components/Searchbar';
import ChoiceChips from './ChoiceChips';
import Modal from './Modal';

const Container = ({ startups, searchQuery, industries, investmentTypes }) => {
  const [search, setSearch] = useState('');
  const [startupsList, setStartupsList] = useState(startups || []);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedInvestmentType, setSelectedInvestmentType] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStartup, setModalStartup] = useState({});
  const [error, setError] = useState('');
  const industriesList = industries || [];
  const investmentTypesList = investmentTypes || [];
  /**
   * Handles the search functionality.
   * calls the searchQuery function with the search query,
   * updates the startupsList state with the search results,
   * If an error occurs, it logs the error and sets an error message.
   *
   * @returns {Promise<void>}
   */
  const handleSearch = async () => {
    // handle empty search query
    if (!search) {
      setStartupsList(startups);
      return;
    }
    try {
      setError('');
      const res = await searchQuery(search);
      setStartupsList(res);
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again.');
    }
  };

  const renderStartups = () => {
    // render startups based on selected industry, investment type and search query
    let filteredStartups = startupsList;
    if (selectedIndustry !== 'All') {
      filteredStartups = filteredStartups.filter(
        (startup) => startup.IndustryVertical === selectedIndustry,
      );
    }
    if (selectedInvestmentType !== 'All') {
      filteredStartups = filteredStartups.filter(
        (startup) => startup.InvestmentType === selectedInvestmentType,
      );
    }
    return filteredStartups.map((startup) => (
      <Card key={startup._id} startup={startup} handleModal={handleModal} />
    ));
  };

  const reset = () => {
    setStartupsList(startups);
    setSelectedIndustry('All');
    setSelectedInvestmentType('All');
    setSearch('');
  };

  const handleModal = (startup) => {
    setModalStartup(startup);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Searchbar
        reset={reset}
        handleSearch={handleSearch}
        startupsList={startupsList}
        search={search}
        setSearch={setSearch}
        setStartupsList={setStartupsList}
        error={error}
        setError={setError}
      />
      <div className="flex my-2">
        <div className="flex mx-4 gap-4 w-full">
          <ChoiceChips
            investmentTypesList={investmentTypesList}
            selectedInvestmentType={selectedInvestmentType}
            setSelectedInvestmentType={setSelectedInvestmentType}
          />
          <Dropdown
            industriesList={industriesList}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
          />
        </div>
      </div>
      <div className="ml-5 mt-4 px-4 border-l-4 border-blue-500 ">
        {search && (
          <p className="text-gray-500">Search for &quot;{search}&quot;</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {startupsList && (
          <div className="text-gray-500">
            <p>Showing {startupsList.length} results</p>
          </div>
        )}
        <div className="text-gray-500">
          <p>Click on a card to see more details</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {renderStartups()}
      </div>
      {isModalOpen && (
        <Modal startup={modalStartup} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default Container;
