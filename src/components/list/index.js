import React from 'react';

import ListItem from '../list-item';

const List = (props) => {
  const { 
    contacts, setAllContacts, 
    favorites, setFavorites,
    activeDropdown, setActiveDropdown,
  } = props;

  const renderContacts = contacts.map((item, i) => (
    <ListItem 
      item={item}
      contacts={contacts}
      setAllContacts={setAllContacts}
      favorites={favorites}
      setFavorites={setFavorites}
      index={i}
      activeDropdown={activeDropdown}
      setActiveDropdown={setActiveDropdown}
      key={`contacts-list-item-${item.name + i}`} 
    />
  ));

  return (
    <div className="list">
      {renderContacts}
    </div>
  );
};

export default List;