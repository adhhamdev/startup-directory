const Card = ({ startup }) => {
    return (
        <div className="bg-slate-200 shadow-lg rounded-lg px-4 py-6">
            <h3 className="text-xl font-medium text-gray-700">{startup.StartupName}</h3>
            <p className="text-gray-500 my-2">{startup.CityLocation}</p>
            <a href="#" className="text-blue-500 font-bold hover:underline">Read more</a>
        </div>
    );
}

export default Card;