import { useState } from 'react';

export default function Search () {
  const [query, setQuery] = useState('');

  function handleChange (e) {
    setQuery(e.target.val);
  }


  return (
    <div id='search'>
      <h2>Search</h2>
      <input
        type='text'
        value={query}
        onChange={handleChange}
        />
        <div className='auto-complete'>
        </div>
    </div>
  )
}