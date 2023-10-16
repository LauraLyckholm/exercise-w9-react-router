// - This component is responsible for displaying detailed information about a specific song.
// - It uses the `useParams` hook from `react-router-dom` to fetch the song title from the URL.
// - Based on the song title from the URL, it finds the corresponding song from the imported JSON data.
// - If the song is found, it displays its title, artist, album, and year. If not, it displays a "Song not found!" message.
// TODO: Import necessary modules and data
import { useParams } from "react-router-dom";
import data from '../data/songs.json'
console.log(data);
const songs = data.songs
console.log(songs)

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {
  const params = useParams()
  console.log(params);

  const songMatch = songs.find((song) => song.title === params.songTitle)
  console.log(songMatch);

  if (songMatch) {
    return (
      <section>
        <h1>{songMatch.title}</h1>
        <h2>{songMatch.artist}</h2>
        <h2>{songMatch.album}</h2>
        <h3>{songMatch.year}</h3>

      </section>
    )
  } else {
    <p>Song not found</p>
  }


  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
}

export default SongInfo;
