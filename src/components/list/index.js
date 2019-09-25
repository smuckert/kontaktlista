import React from 'react';

import ListItem from '../list-item';

import './index.scss';

const List = (props) => {
  const { 
    contacts, setAllContacts, 
    favorites, setFavorites 
  } = props;

  const renderContacts = contacts.map((item, i) => (
    <ListItem 
      item={item}
      contacts={contacts}
      setAllContacts={setAllContacts}
      favorites={favorites}
      setFavorites={setFavorites}
      key={`contacts-list-item-${i}`} 
    />
  ));

  return (
    <div className="list">
      {renderContacts}
    </div>
  );
};

export default List;