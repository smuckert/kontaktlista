import React, { useState, useEffect } from 'react';

import Close from '../../img/close.svg';
import Star from '../../img/star.svg';
import StarBorder from '../../img/star_border.svg';

import './index.scss';

const ListItem = (props) => {
  const { 
    item, favorites, setFavorites, isFavorite,
    filteredFavorites, setFilteredFavorites, index, 
    activeDropdown, setActiveDropdown
  } = props;

  const [active, setActive] = useState(false);
  const [addedToFavorite, setAddedToFavorite] = useState(false);

  const onActiveClick = () => {
    setActive(true);
    setActiveDropdown(index);
  };

  const onCloseClick = (e) => {
    e.stopPropagation();
    setActive(false);
  }

  const onAddFavorite = () => {
    let arr = [];
  
    arr.push(item);
    setFavorites(favorites.concat(arr));
  }

  // removes deleted item via index
  const onRemoveFavorite = () => {
    let arr = [...favorites];

    arr.map((contact, i) => {
      if (contact === item) {
        arr.splice(i, 1);
      }

      return null;
    });

    setFavorites(arr);
  }

  // had to use this function to remove same item from both arrays
  // if you delete it when you have already searched
  const onRemoveFilteredFavorite = () => {
    let arr = [...filteredFavorites];

    arr.map((contact, i) => {
      if (contact === item) {
        arr.splice(i, 1);
      }

      return null;
    });

    onRemoveFavorite();
    setFilteredFavorites(arr);
  }

  // set img to Star as initial if you go to favorites
  let favoriteButtons;
  
  if (!isFavorite) {
    favoriteButtons = (
       addedToFavorite ? (
        <img src={Star} onClick={onRemoveFavorite} alt="Remove favorite" />
      ) : (
        <img src={StarBorder} onClick={onAddFavorite} alt="Add favorite" />
      )
    )
  } else {
    favoriteButtons = (
      <img src={Star} onClick={onRemoveFilteredFavorite} alt="Remove favorite" />
    )
  }

  
  // check if item exists in favorites to set state
  useEffect(() => {
   if(favorites.includes(item)) {
     setAddedToFavorite(true);
   } else {
     setAddedToFavorite(false);
   }
  }, [favorites, item]);

  return (
    <div className={`list-item${active && activeDropdown === index ? ' active' : ''}`} onClick={onActiveClick}>
      <div className="name-wrapper">
        <p>{item.name}</p>
        {favoriteButtons}
      </div>
      <div className="active-view">
        <img className="close-button" src={Close} alt="Close button" onClick={onCloseClick} />
        <h6>{item.email}</h6>
      </div>
    </div>
  );
}

export default ListItem