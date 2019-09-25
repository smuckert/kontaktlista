import React from 'react';

import ListItem from '../list-item';

import './index.scss';

const Favorites = (props) => {
  const { 
    favorites, showFavorites, setFavorites, 
    filteredFavorites, renderFilteredFavorites 
  } = props;

  let renderFavorites;

  if (renderFilteredFavorites) {
    renderFavorites = filteredFavorites.map((item, i) => (
      <ListItem 
        item={item}
        favorites={favorites}
        isFavorite
        setFavorites={setFavorites}
        key={`filtered-favorites-list-item-${i}`} 
      />
    ));
  } else {
    renderFavorites = favorites.map((item, i) => (
      <ListItem 
        item={item}
        favorites={favorites}
        isFavorite
        setFavorites={setFavorites}
        key={`favorites-list-item-${i}`} 
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