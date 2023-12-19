import {
  BuildingOfficeIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/16/solid';

const Card = ({ startup, handleModal }) => {
  return (
    <div
      className="
        flex flex-col justify-between bg-slate-200 shadow-lg rounded-lg px-4 py-4
        hover:shadow-xl transition duration-200 ease-in-out
        "
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
        <p className="flex items-center text-gray-500 my-2">
          <MapPinIcon className="w-6 pr-2" />
          {startup.CityLocation}
        </p>
      </div>
      <button
        className="text-blue-500 font-bold hover:underline"
        onClick={() => handleModal(startup)}
      >
        Read more
      </button>
    </div>
  );
};

export default Card;
