import React from 'react';

import ListItem from '../list-item';

import './index.scss';

const List = (props) => {
  const { contacts, setAllContacts, favorites, setFavorites, favoritesVisible, showFavorites } = props;

  const renderContacts = contacts.map((item, i) => (
    <ListItem 
      item={item}
      contacts={contacts}
      setAllContacts={setAllContacts}
      favorites={favorites}
      setFavorites={setFavorites}
      key={`list-item-${i}`} 
    />
  ));

  return (
    <div className="list">
      {renderContacts}
    </div>
  );
};

export default List;