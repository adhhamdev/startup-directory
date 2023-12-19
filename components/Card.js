const Card = ({ startup, handleModal }) => {
    return (
        <div className="
        flex flex-col justify-between bg-slate-200 shadow-lg rounded-lg px-4 py-4
        hover:shadow-xl transition duration-200 ease-in-out
        ">
            <div>
                <h3 className="text-xl font-medium text-gray-700">{startup.StartupName}</h3>
                <p className="my-2">{startup.InvestorsName}</p>
                <p className="text-gray-500 my-2">{startup.CityLocation}</p>
            </div>
            <button className="text-blue-500 font-bold hover:underline" onClick={() => handleModal(startup)}>Read more</button>
        </div>
    );
}

export default Card;