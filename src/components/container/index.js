import React, { useState } from 'react';

import Search from '../search';
import List from '../list';

import './index.scss';

import { contacts } from './contacts.js';

const Container = () => {
  const [allContacts, setAllContacts] = useState(contacts);
  const [favorites, setFavorites] = useState([]);
  const [favoritesVisible, setFavoritesVisible] = useState(false);

  return (
    <div className="container">
      <h2>Contacts</h2>
      <Search 
        contacts={allContacts}
        setAllContacts={setAllContacts}
        initialContacts={contacts}
        favorites={favorites}
        favoritesVisible={favoritesVisible}
        setFavoritesVisible={setFavoritesVisible}
      />
      <List 
        contacts={allContacts}
        setAllContacts={setAllContacts}
        favorites={favorites}
        setFavorites={setFavorites}
        favoritesVisible={favoritesVisible}
      />
    </div>
  );
}

export default Container;