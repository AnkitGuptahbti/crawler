// import React from 'react';
// import SearchBar from '@theme-original/SearchBar';

// export default function SearchBarWrapper(props) {
//   return (
//     <>
//       <SearchBar {...props} />
//     </>
//   );
// }


// src/theme/SearchBar/index.js
import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';

function SearchBar() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to the search results page with the query
    if (query) {
      history.push(`/search?q=${query}`);
    }
  };

  return (
    <div className="custom-search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
