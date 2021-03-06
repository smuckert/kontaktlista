import React, { useState, useRef } from 'react';

import SearchIcon from '../../img/magnifier.svg';

import './index.scss';

const Search = (props) => {
  const { 
    contacts, setAllContacts, initialContacts, 
    showFavorites, favorites, setFilteredFavorites,
    setRenderFilteredFavorites,
  } = props;

  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);

  const onHandleChange = () => {
    setInputValue(inputRef.current.value);
  };

  const searchAllContacts = () => {
    let newContacts = [];
    const regExp = new RegExp(inputValue.toLowerCase());

    contacts.filter(contact => {
      if (regExp.test(contact.name.toLowerCase()) && inputValue !== '') {
        newContacts.push(contact);
      }

      return null;
    });

    if (inputValue === '') {
      setAllContacts(initialContacts);
    } else {
      setAllContacts(newContacts);
    }
  }

  const searchFavorites = () => {
    let newContacts = [];
    const regExp = new RegExp(inputValue.toLowerCase());

    favorites.filter(contact => {
      if (regExp.test(contact.name.toLowerCase()) && inputValue !== '') {
        newContacts.push(contact);
      }

      return null;
    });

    if (inputValue === '') {
      setRenderFilteredFavorites(false);
    } else {
      setRenderFilteredFavorites(true);
      setFilteredFavorites(newContacts);
    }
  }

  const onSearchClick = () => {
    if (showFavorites) {
      searchFavorites();
    } else {
      searchAllContacts();
    }
  };

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onSearchClick();
    }
  }

  return (
    <div className="search">
      <input className="search-input" ref={inputRef} placeholder="Sök" onChange={onHandleChange} onKeyPress={onEnter} />
      <img src={SearchIcon} alt="Search-icon" />
    </div>
  );
}

export default Search;