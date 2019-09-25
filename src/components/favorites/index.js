import React from 'react';

import ListItem from '../list-item';

const Favorites = (props) => {
  const { 
    favorites, showFavorites, setFavorites, 
    filteredFavorites, renderFilteredFavorites,
    setFilteredFavorites, activeDropdown, 
    setActiveDropdown,
  } = props;

  // split up filteredFavorites and favorites to be able to use
  // favorites array as initial value when you reset the search

  let renderFavorites;

  if (renderFilteredFavorites) {
    renderFavorites = filteredFavorites.map((item, i) => (
      <ListItem 
        item={item}
        favorites={favorites}
        isFavorite
        setFavorites={setFavorites}
        filteredFavorites={filteredFavorites}
        setFilteredFavorites={setFilteredFavorites}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        index={i}
        key={`filtered-favorites-list-item-${item.name + i}`}
      />
    ));
  } else {
    renderFavorites = favorites.map((item, i) => (
      <ListItem 
        item={item}
        favorites={favorites}
        isFavorite
        setFavorites={setFavorites}
        filteredFavorites={filteredFavorites}
        setFilteredFavorites={setFilteredFavorites}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        index={i}
        key={`favorites-list-item-${item.name + i}`} 
      />
    ));
  }

  return (
    <div className={`favorites${showFavorites ? ' visible' : ''}`}>
      {renderFavorites}
    </div>
  );
};

export default Favorites;