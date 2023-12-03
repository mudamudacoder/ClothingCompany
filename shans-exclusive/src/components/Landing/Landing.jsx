import React from 'react';

const Landing = () => {
    return (
      <div>
        <header className="flex justify-between items-center w-full px-2 lg:px-6 border-b border-gray-200 py-2 bg-saffron-500">
          {/* Logo */}
          <div className="pb-1 lg:pb-0 pt-1 lg:pt-0 pr-0 sm:pr-1">
            <a href="/ca/?ref=lgo">
              <span className="block text-white">Logo</span>
            </a>
          </div>
  
          {/* Navigation */}
          <nav className="hidden lg:flex">
            <button className="text-white hover:text-bronze-100 mr-4">
              Categories
            </button>
            {/* Additional nav items */}
          </nav>
  
          {/* Search and actions */}
          <div className="flex w-full lg:w-auto">
            <form className="flex w-full" action="/ca/search.php" method="GET">
              <input
                type="text"
                className="form-input w-full px-4 py-2 border rounded border-alloy_orange-300"
                placeholder="Search for anything"
              />
              <button
                type="submit"
                className="bg-bronze-500 hover:bg-bronze-700 text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>
            </form>
          </div>
        </header>
  
        {/* Main content area */}
      </div>
    );
  };
  

export default Landing;
