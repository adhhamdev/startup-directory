
const ChoiceChips = ({ investmentTypesList, selectedInvestmentType, setSelectedInvestmentType }) => {
  // Filter out duplicate investment types
  const distinctInvestmentTypes = investmentTypesList.filter((value, index, self) => {
    const lowerCaseValue = value.toLowerCase();
    return self.findIndex(item => item.toLowerCase() === lowerCaseValue) === index;
});

  return (
    <div className="choiceChips flex flex-nowrap overflow-x-auto overflow-y-hidden whitespace-nowrap border-r-2 w-full scroll-smooth">
      {/* Render buttons for distinct investment types */}
      {distinctInvestmentTypes.map((investType, index) => (
        <button
          key={index}
          type="button"
          className={`px-5 py-2 text-sm rounded-full ${selectedInvestmentType === investType ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white mx-1`}
          onClick={() => setSelectedInvestmentType(investType)}
        >
          {investType}
        </button>
      ))}
    </div>
  );
}

export default ChoiceChips;