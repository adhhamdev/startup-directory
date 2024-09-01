import {
  BuildingOfficeIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/16/solid';

const Card = ({ startup, handleModal }) => {
  return (
    <div
      className="flex flex-col justify-between px-4 py-4 transition duration-200 ease-in-out rounded-lg shadow-lg  bg-slate-200 hover:shadow-xl"
    >
      <div>
        <h3 className="flex items-center text-xl font-medium text-gray-700">
          <BuildingOfficeIcon className="w-12 pr-2" />
          {startup.StartupName}
        </h3>
        <p className="flex items-center my-2">
          <UserIcon className="w-6 pr-2" />
          {startup.InvestorsName}
        </p>
        <p className="flex items-center my-2 text-gray-500">
          <MapPinIcon className="w-6 pr-2" />
          {startup.CityLocation}
        </p>
      </div>
      <button
        className="font-bold text-blue-500 hover:underline"
        onClick={() => handleModal(startup)}
      >
        Read more
      </button>
    </div>
  );
};

export default Card;
