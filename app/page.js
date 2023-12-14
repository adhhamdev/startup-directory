import { getAllStartups } from "@/lib/db";
import Container from "@/components/Container";
import Startup from "@/lib/startupSchema";
export default async function Home() {
  const startups = await getAllStartups();
  const searchQuery = async (searchTerm) => {
    "use server"
    const startups = await Startup.search({ search: searchTerm }).limit(5)
    return startups
  }
  return (
    <main>
      <h1 className="text-4xl mx-4 my-4 text-blue-500">Startup Directory.</h1>
      <p className="mx-4 mb-8 text-gray-500">Explore various startups from around the world.</p>
      <Container startups={startups} searchQuery={searchQuery} />
    </main>
  )
}
