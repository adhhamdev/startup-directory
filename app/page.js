import Container from "@/components/Container";
import {  getAllStartups, searchQuery, getAllIndustries, getAllInvestmentTypes } from "@/lib/db";

export default async function Home() {
  const startups = await getAllStartups();
  const industries = await getAllIndustries();
  const investmentTypes = await getAllInvestmentTypes();
  return (
    <main className="scroll-smooth">
      <h1 className="text-4xl mx-4 my-4 text-blue-500">Startup Directory.</h1>
      <p className="mx-4 mb-8 text-gray-500">Explore various startups from around the world.</p>
      <Container startups={startups} searchQuery={searchQuery} industries={industries} investmentTypes={investmentTypes} />
    </main>
  )
}
