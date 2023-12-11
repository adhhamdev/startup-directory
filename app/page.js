import { poppins } from "./fonts"
export default function Home() {
  return (
    <main>
      <h1 className={`${poppins.className} text-4xl mx-4 my-4 text-blue-500`}>Startup Directory.</h1>
      <p className="mx-4 mb-8 text-gray-500">Explore various startups from around the world.</p>
      <div className="flex flex-row mx-4 gap-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search..." />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </div>
      <div className="flex my-2">
        <div className="flex flex-row mx-4 gap-4">
          {/* dropdown in tailwind */}
          <div className="relative inline-block text-left">
            <div>
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                Categories
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">SaaS</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Mobile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Web</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Blockchain</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">AI</a>
              </div> 
            </div>
          </div>
          
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
        <div className="bg-white shadow-lg rounded-lg px-4 py-6">
          <h3 className="text-xl font-medium text-gray-700">Startup 1</h3>
          <p className="text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni.</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">Read more</a>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-4 py-6">
          <h3 className="text-xl font-medium text-gray-700">Startup 2</h3>
          <p className="text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni.</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">Read more</a>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-4 py-6">
          <h3 className="text-xl font-medium text-gray-700">Startup 3</h3>
          <p className="text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni.</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">Read more</a>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-4 py-6">
          <h3 className="text-xl font-medium text-gray-700">Startup 4</h3>
          <p className="text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni.</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">Read more</a>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-4 py-6">
          <h3 className="text-xl font-medium text-gray-700">Startup 5</h3>
          <p className="text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni.</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">Read more</a>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-4 py-6">
          <h3 className="text-xl font-medium text-gray-700">Startup 6</h3>
          <p className="text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magni.</p>
          <a href="#" className="text-blue-500 font-bold hover:underline">Read more</a>
        </div>
      </div>

      <div className="fixed z-10 inset-0 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* Background overlay, show/hide based on modal state. */}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          {/* Modal panel, show/hide based on modal state. */}
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"> */}
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  {/* Heroicon name: outline/exclamation */}
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4H18a2 2 0 002-2V7a2 2 0 00-2-2H5.062A2 2 0 003 7v10a2 2 0 002 2z" /> */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M
                    12 9
                    v2
                    m0 4
                    h.01
                    m-6.938 4
                    H18
                    a2 2 0 002-2
                    V7
                    a2 2 0 00-2-2
                    H5.062
                    A2 2 0 003 7

                    v10
                    a2 2 0 002 2
                    z
                    " />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Deactivate account
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                Deactivate
              </button>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
