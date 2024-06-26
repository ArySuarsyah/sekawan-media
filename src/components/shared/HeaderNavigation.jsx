import { useState } from 'react';

const HeaderNavigation = () => {

  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log('Melakukan pencarian...');
    }
  };

  return (
    <div className="navbar bg-white dark:bg-base-200 text-base-100 dark:text-white mb-10">
      <div className="navbar-start">
        <h1>Overview</h1>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle" onClick={() => setShowSearchInput(!showSearchInput)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        {showSearchInput && (
          <input type="text" placeholder="Search" className="input w-full max-w-xs" onKeyDown={handleSearch} />
        )}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="border-r border-gray-400 mx-3 h-6 align-middle"></div>
        <div className="flex items-center space-x-2 gap-2">
          <span className="text-sm font-semibold">Nama User</span>
          <img src="/path/to/user/profile.jpg" alt="User Profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default HeaderNavigation
