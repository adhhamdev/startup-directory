import {
  BuildingOfficeIcon,
  MapPinIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  WrenchIcon,
  BanknotesIcon,
  UserIcon,
  TagIcon
} from '@heroicons/react/24/solid';

const Modal = ({ startup, setIsModalOpen }) => {
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto h-screen`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                {startup.StartupName ? (
                  <h3
                    className="flex items-center text-lg leading-6 font-medium text-gray-900 mb-4"
                    id="modal-headline"
                  >
                    <BuildingOfficeIcon className="w-10" />
                    <span className="pl-1 text-4xl">
                      {startup.StartupName}{' '}
                      <span className="text-gray-500 text-xl">
                        #{startup.SNo}
                      </span>
                    </span>
                  </h3>
                ) : (
                  <h3
                    className="flex items-center text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    <BuildingOfficeIcon className="w-10" />
                    <span className="pl-1 text-4xl">No Name</span>
                  </h3>
                )}
                <div className="mt-2">
                  {startup.CityLocation && (
                    <p className="flex items-center pb-2 text-sm text-gray-500">
                      <MapPinIcon className="w-6" />
                      <span className="pl-2 text-1xl">
                        {startup.CityLocation}
                      </span>
                    </p>
                  )}
                  {startup.Date && (
                    <p className="flex items-center pb-2 text-sm text-gray-500">
                      <CalendarDaysIcon className="w-6" />
                      <span className="pl-2 text-1xl">{startup.Date}</span>
                    </p>
                  )}
                  {startup.AmountInUSD && (
                    <p className="flex items-center pb-2 text-sm text-gray-500">
                      <CurrencyDollarIcon className="w-6" />
                      <span className="pl-2 text-1xl">
                        {startup.AmountInUSD}
                      </span>
                    </p>
                  )}
                  {startup.IndustryVertical && (
                    <p className="flex items-center pb-2 text-sm text-gray-500">
                      <WrenchIcon className="w-6" />
                      <span className="pl-2 text-1xl">
                        {startup.IndustryVertical}
                      </span>
                    </p>
                  )}
                  {startup.SubVertical && (
                    <p className="flex items-center pb-2 text-sm text-gray-500">
                      <TagIcon className="w-6" />
                      <span className="pl-2 text-1xl">
                        {startup.SubVertical}
                      </span>
                    </p>
                  )}
                  {startup.InvestmentType && (
                    <p className="flex items-center pb-2 text-sm text-gray-500">
                      <BanknotesIcon className="w-6" />
                      <span className="pl-2 text-1xl">
                        {startup.InvestmentType}
                      </span>
                    </p>
                  )}
                  {startup.InvestorsName && (
                    <p className="flex items-center pb-2 text-sm text-gray-500">
                      <UserIcon className="w-6" />
                      <span className="pl-2 text-1xl">
                        {startup.InvestorsName}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
