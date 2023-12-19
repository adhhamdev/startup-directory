const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Create a new startup</h1>
        <p className="mt-3 text-2xl">
          Edit the startup details below and click on submit to create a new
          startup.
        </p>
        <div className="flex flex-wrap justify-around max-w-4xl mt-6 sm:w-full">
          <div className="flex flex-col items-center justify-center p-6 mt-6 text-left border-2 border-gray-300 rounded-xl">
            <form className="flex flex-col items-center justify-center">
              <label className="text-2xl font-bold">Startup Name</label>
              <input
                className="w-80 h-10 p-2 mt-2 text-xl border-2 border-gray-300 rounded-xl"
                type="text"
                name="startupName"
                placeholder="Enter startup name"
              />
              <label className="text-2xl font-bold mt-4">
                Industry Vertical
              </label>
              <input
                className="w-80 h-10 p-2 mt-2 text-xl border-2 border-gray-300 rounded-xl"
                type="text"
                name="industryVertical"
                placeholder="Enter industry vertical"
              />
              <label className="text-2xl font-bold mt-4">City Location</label>
              <input
                className="w-80 h-10 p-2 mt-2 text-xl border-2 border-gray-300 rounded-xl"
                type="text"
                name="cityLocation"
                placeholder="Enter city location"
              />
              <label className="text-2xl font-bold mt-4">Investment Type</label>
              <input
                className="w-80 h-10 p-2 mt-2 text-xl border-2 border-gray-300 rounded-xl"
                type="text"
                name="investmentType"
                placeholder="Enter investment type"
              />
              <label className="text-2xl font-bold mt-4">Amount in USD</label>
              <input
                className="w-80 h-10 p-2 mt-2 text-xl border-2 border-gray-300
                            rounded-xl"
                type="text"
                name="amountInUSD"
                placeholder="Enter amount in USD"
              />
              <label className="text-2xl font-bold mt-4">Investors Name</label>
              <input
                className="w-80 h-10 p-2 mt-2 text-xl border-2 border-gray-300 rounded-xl"
                type="text"
                name="investorsName"
                placeholder="Enter investors name"
              />
              <label className="text-2xl font-bold mt-4">Remarks</label>
              <input
                className="w-80 h-10 p-2 mt-2 text-xl border-2 border-gray-300 rounded-xl"
                type="text"
                name="remarks"
                placeholder="Enter remarks"
              />
              <button className="w-80 h-10 mt-4 text-2xl font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
