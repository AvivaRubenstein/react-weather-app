import React from 'react';
import SearchCard from './components/SearchCard';

function App() {
  return (
<div>
    <div className="container-fluid">
    <nav className="navbar sticky-top " id="nav">
      <div className="container-fluid">
        <div className="navbar-brand" id="nav-text">Welcome to the Weather Dashboard!</div>
      </div>
    </nav>
  </div>
    <SearchCard />
    </div>
  );
}

export default App;
