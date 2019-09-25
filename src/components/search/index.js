import React, { useState, useRef } from 'react';

import './index.scss';

const Search = (props) => {
  const { contacts, setAllContacts, initialContacts } = props;

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
    if (inputValue === '') {
      setAllContacts(initialContacts);
    } else {
      setAllContacts(newContacts);
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
    </div>
  );
}

export default Search;