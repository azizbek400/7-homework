import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  return (

    <div className="App">
      <h1>TV Shows</h1>
      <div className="show-list">
        {shows.map(show => (
          <div key={show.id} className="show-item">
            <h2>{show.name}</h2>
            <img src={show.image?.medium} alt={show.name} />
            <p>{show.summary}</p>
            <button className='btn'>Show more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;