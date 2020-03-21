import React, { useState, useEffect } from "react";

export default function SearchForm({ listOfCharacters }) {
  const [filteredList, setFilteredList] = useState([]);
  const [query, setQuery] = useState('');

  console.log('listOfChars', filteredList)

  useEffect(() => {
    const filteredCharacters = listOfCharacters.filter(character => 
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(filteredCharacters);
  }, [query])

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  return (
    <section className="search-form">
      <form>
        <input
          type='text'
          onChange={handleInputChange}
          value={query}
          name='name'
          placeholder='Search by name'
        />
      </form>
      <div>
        {filteredList.map(character => {
          return (
            <div key={character.id}>
              <h2>{character.name}</h2>
            </div>
          )
        }  
        )}
      </div>
    </section>
  );
}
