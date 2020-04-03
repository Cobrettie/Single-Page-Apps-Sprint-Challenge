// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function EpisodeCharactersList(props) {
//   console.log(props);
//   const [episodeCharacters, setEpisodeCharacters] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://rickandmortyapi.com/api/episode/${props.match.params.id}`)
//       .then(response => {
//         console.log(response)
//         const allCharacters = response.data.characters
//         setEpisodeCharacters(allCharacters)
//         return allCharacters
//       })
//       .catch(err => console.log(err))
//   }, [])

//   return (
//   console.log('episodeCharacters line 23', episodeCharacters),
//     <div>
//       <h2>Episode Characters List</h2>
//     </div>
//   )
// }