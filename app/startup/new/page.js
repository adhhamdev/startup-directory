import { newStartup } from "@/lib/db";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl text-blue-600 font-bold">
          Create a new startup
        </h1>
        <p className="mt-3">
          Edit the startup details below and click on submit to create a new
          startup.
        </p>
        <div className="flex flex-wrap justify-around max-w-4xl mt-6 sm:w-full">
          <div className="flex flex-col items-center justify-center p-6 mt-6 text-left border-2 border-gray-300 rounded-xl">
            <form className="w-full max-w-lg" action={newStartup} name="new-startup">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="name"
                  >
                    Startup Name
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none bg-gray-100 border-gray-200 focus:outline-none focus:bg-white"
                    id="name"
                    type="text"
                    placeholder="Enter the name..."
                    autoComplete="name"
                    name="name"
                    required
                    autoFocus
                  />
                  <p className="text-xs italic text-gray-600">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="founders-names"
                  >
                    Founders Names
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none bg-gray-100 border-gray-200 focus:outline-none focus:bg-white"
                    id="founders-names"
                    type="text"
                    placeholder="Enter the founder name..."
                    autoComplete="name"
                    name="investors"
                    required
                    autoFocus
                  />
                  <p className="text-xs italic text-gray-600">
                    Please fill out this field. (Separate names with commas)
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="industry"
                  >
                    Industry
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none bg-gray-100 border-gray-200 focus:outline-none focus:bg-white"
                    id="industry"
                    type="text"
                    placeholder="Enter the industry..."
                    name="industry"
                    required
                  />
                  <p className="text-xs italic text-gray-600">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none bg-gray-100 border-gray-200 focus:outline-none focus:bg-white"
                    id="city"
                    type="text"
                    placeholder="Enter the city..."
                    name="city"
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="amount"
                  >
                    Funding Amount
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none bg-gray-100 border-gray-200 focus:outline-none focus:bg-white"
                    id="amount"
                    type="number"
                    inputMode="numeric"
                    placeholder="$..."
                    name="amount"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    htmlFor="year"
                  >
                    Starting Year
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none bg-gray-100 border-gray-200
focus:outline-none focus:bg-white"
                    id="year"
                    type="date"
                    placeholder="Enter the starting year..."
                    name="year"
                    required
                  />
                </div>
              </div>
              <button className="mt-5 px-4 py-2 font-bold w-full text-white bg-blue-500 rounded hover:bg-blue-700">
                Finish
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
