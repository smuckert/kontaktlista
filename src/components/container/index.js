import React, { useState } from 'react';

import Search from '../search';
import List from '../list';
import Favorites from '../favorites';

import './index.scss';

import { contacts } from './contacts.js';

const Container = () => {
  const [allContacts, setAllContacts] = useState(contacts);
  const [favorites, setFavorites] = useState([]);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [renderFilteredFavorites, setRenderFilteredFavorites] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  
  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  }

  return (
    <div className="container">
      <h2>Contacts</h2>
      <Search 
        contacts={allContacts}
        setAllContacts={setAllContacts}
        initialContacts={contacts}
        favorites={favorites}
        setFavorites={setFavorites}
        showFavorites={showFavorites}
        setFilteredFavorites={setFilteredFavorites}
        setRenderFilteredFavorites={setRenderFilteredFavorites}
      />
      <div className="filter-div">
        {showFavorites ? (
          <h6 onClick={toggleFavorites}>Visa alla</h6>
          ) : (
          <h6 onClick={toggleFavorites}>Filtrera favoriter</h6>
        )}
      </div>
      {showFavorites ? (
        <Favorites 
          favorites={favorites}
          setFavorites={setFavorites}
          showFavorites={showFavorites}
          filteredFavorites={filteredFavorites}
          renderFilteredFavorites={renderFilteredFavorites}
          setFilteredFavorites={setFilteredFavorites}
        />
        ) : (
        <List 
          contacts={allContacts}
          setAllContacts={setAllContacts}
          favorites={favorites}
          setFavorites={setFavorites}
          showFavorites={showFavorites}
        />
      )}      
    </div>
  );
}

export default Container;