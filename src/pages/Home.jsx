// - This component displays a list of the "Rolling Stones 500 Greatest Songs of all Time".
// - Songs data is imported from a JSON file and is mapped to display each song with a link.
// - The link for each song is dynamically generated based on the song's title. This will be crucial when setting up dynamic routes.

// TODO: Import necessary modules and data
import data from "../data/songs.json";
import { Link } from "react-router-dom";
// import SongInfo from "./SongInfo";
console.log(data.songs)

function Home() {
  const songs = data.songs;

  // TODO: Implement logic to display the list of songs
  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        <ul>
          {songs.map((song) => {
            return (
              <Link key={song.rank} to={`/song/${song.title}`}>
                {/* <SongInfo title={song.title} album={song.album} artist={song.artist} year={song.year} rank={song.rank} /> */}
                <li>
                  {song.title}
                </li>
              </Link>
            )
          })}
        </ul>
        {/* TODO: Display the list of songs with links */}
      </div>
    </>
  );
}

export default Home;
