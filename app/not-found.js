const notFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold">404</div>
          <p className="text-2xl font-light mb-8">Page not found</p>
          <a
            href="/"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
};

export default notFound;
