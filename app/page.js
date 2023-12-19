import Link from 'next/link';
import Container from '@/components/Container';
import {
  getAllStartups,
  searchQuery,
  getAllIndustries,
  getAllInvestmentTypes,
} from '@/lib/db';

export default async function Home() {
  const startups = await getAllStartups();
  const industries = await getAllIndustries();
  const investmentTypes = await getAllInvestmentTypes();
  return (
    <main className="scroll-smooth">
      <h1 className="text-4xl mx-4 my-4 text-blue-500">Startup Directory.</h1>
      <p className="mx-4 mb-8 text-gray-500">
        Explore various startups from around the world.
      </p>
      <Container
        startups={startups}
        searchQuery={searchQuery}
        industries={industries}
        investmentTypes={investmentTypes}
      />
      <Link href="/startup/new">
        <button className="flex items-center fixed bottom-10 right-10 px-5 text-white bg-blue-500 rounded-full hover:bg-blue-700 shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 mx-auto my-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          New Startup
        </button>
      </Link>
    </main>
  );
}
