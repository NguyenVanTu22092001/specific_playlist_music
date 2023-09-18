import React, { useState } from "react";
import "../styles/LeftMenu.css";
import Track from "../img/track.png";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import styled from "styled-components";
// bottom left

const VolumeSlider = styled.input`
  &::before {
    width: ${(props) => props.volume}% !important;
  }
`;
function TrackList({ trackName, artistName }) {
  const [volume, setVolume] = useState(50); // Initial volume value (you can set it as needed)

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  return (
    <div className="trackList">
      <div className="top">
        <img src={Track} alt="" />
        <p>
          {trackName} <span>{artistName}</span>
        </p>
      </div>

      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>

        <VolumeSlider
          type="range"
          volume={volume}
          onChange={handleVolumeChange}
        />

        <i>
          <BsMusicNoteList />
        </i>

        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export default TrackList;
