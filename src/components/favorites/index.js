import React from 'react';

import ListItem from '../list-item';

import './index.scss';

const Favorites = (props) => {
  const { 
    favorites, showFavorites, setFavorites, 
    filteredFavorites, renderFilteredFavorites,
    setFilteredFavorites,
  } = props;

  // split up filteredFavorites and favorites to be able to use
  // favorites array as initial value when you erase the search input text

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