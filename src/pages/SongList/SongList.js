import React from "react";
import { useSelector } from "react-redux";
import SongItem from "./SongItem";

export default function SongList() {

  const songs = useSelector(store => store.songs.songs);
  
  return (
    <div>
      SongList
      {/* {songs.map(x => <div><span>{x.songName}</span> <span>{x.rating}</span></div>)} */}
      {songs.map(x => (
        <SongItem song={x} />
      ))}
    </div>
  );
}
