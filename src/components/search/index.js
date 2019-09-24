import React, { useState, useRef } from 'react';

import './index.scss';

const Search = (props) => {
  const { contacts, setAllContacts, initialContacts, favorites, favoritesVisible, setFavoritesVisible } = props;

  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);

  const onHandleChange = () => {
    setInputValue(inputRef.current.value);
  };

  const onSearchClick = () => {
    let newContacts = [];

    const regExp = new RegExp(inputValue.toLowerCase());

    contacts.filter(contact => {
      if (regExp.test(contact.name.toLowerCase()) && inputValue !== '') {
        newContacts.push(contact);
      }
    });

    if (favoritesVisible) {
      if (inputValue === '') {
        setAllContacts(favorites);
      } else {
        setAllContacts(newContacts);
      }
    } else {
      if (inputValue === '') {
        setAllContacts(initialContacts);
      } else {
        setAllContacts(newContacts);
      }
    }    
  };

  const onShowFavorites = () => {
    setFavoritesVisible(!favoritesVisible);
    setAllContacts(favorites);
  }

  const onShowAll = () => {
    setFavoritesVisible(!favoritesVisible)
    setAllContacts(initialContacts);
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onSearchClick();
    }
  }

  return (
    <div className="search">
      <input className="search-input" ref={inputRef} placeholder="Sök" onChange={onHandleChange} onKeyPress={onEnter} />
      <div className="filter-div">
      {favoritesVisible ? (
        <h6 onClick={onShowAll}>Visa alla</h6>
        ) : (
        <h6 onClick={onShowFavorites}>Filtrera favoriter</h6>
      )}
      </div>
    </div>
  );
}

export default Search;