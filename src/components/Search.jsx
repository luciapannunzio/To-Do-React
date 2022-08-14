import React from 'react';
import {MdSearch} from 'react-icons/md';

// We destructure the prop to get the function
export default function Search({handleSearchNote}) {
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.3em' />
      {/* We pass our function. An arrow function taking an event. We will get the value that the user has typed from (e.target.value). Any time that the user types into the input, its going to call the handleSearchNote props, which has a function to update the state. */}
      <input onChange={(e) => handleSearchNote(e.target.value)}type='text' placeholder='type to search...' />
    </div>
  )
}
