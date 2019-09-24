import React from 'react';

import ListItem from '../list-item';

const List = (props) => {
  const { contacts, setAllContacts, favorites, setFavorites, favoritesVisible } = props;

  const renderContacts = contacts.map((item, i) => (
    <ListItem 
      item={item}
      setAllContacts={setAllContacts}
      favorites={favorites}
      setFavorites={setFavorites}
      favoritesVisible={favoritesVisible}
      key={`list-item-${i}`} 
    />
  ));

  console.log(contacts);
  return (
    <div className="list">
      {renderContacts}
    </div>
  );
};

export default List;