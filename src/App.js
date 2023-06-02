import React from 'react';
import SearchCard from './components/SearchCard';


// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  return (
<div>
    <div className="container-fluid">
    <nav className="navbar sticky-top navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" >Welcome to the Weather Dashboard!</a>
      </div>
    </nav>
  </div>
    <SearchCard />
    </div>
  );
}

export default App;
