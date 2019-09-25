import React from 'react';

import ListItem from '../list-item';

import './index.scss';

const Favorites = (props) => {
  const { favorites, showFavorites, setFavorites } = props;

  const renderFavorites = favorites.map((item, i) => (
    <ListItem 
      item={item}
      favorites={favorites}
      isFavorite
      setFavorites={setFavorites}
      key={`list-item-${i}`} 
    />
  ));

  return (
    <div className={`favorites${showFavorites ? ' visible' : ''}`}>
      {renderFavorites}
    </div>
  );
};

export default Favorites;