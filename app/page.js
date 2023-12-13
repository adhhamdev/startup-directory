import { connectDB, getAllStartups, search } from "@/lib/db";
import Container from "@/components/Container";
export default async function Home() {
  await connectDB();
  const startups = await getAllStartups();
  console.log(startups);
  const handleSearch = async (searchTerm) => {
    "use server"
    const res = search(searchTerm);
    console.log(res)
}
  return (
    <main>
      <h1 className="text-4xl mx-4 my-4 text-blue-500">Startup Directory.</h1>
      <p className="mx-4 mb-8 text-gray-500">Explore various startups from around the world.</p>
      <Container startups={startups} handleSearch={handleSearch}/>
    </main>
  )
}
