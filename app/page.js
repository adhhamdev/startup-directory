import { connectDB, getAllStartups } from "@/lib/db";
import Dropdown from "@/components/Dropdown";
import Searchbar from "@/components/Searchbar";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
export default async function Home() {
  await connectDB();
  const startups = await getAllStartups();
  console.log(startups);
  return (
    <main>
      <h1 className="text-4xl mx-4 my-4 text-blue-500">Startup Directory.</h1>
      <p className="mx-4 mb-8 text-gray-500">Explore various startups from around the world.</p>
      <Searchbar startups={startups} />
      <div className="flex my-2">
        <div className="flex flex-row mx-4 gap-4">
          <Dropdown />
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
        {startups.map((startup) => (
          <Card key={startup._id} startup={startup} />
        ))}
      </div>
      <Modal />
    </main>
  )
}
