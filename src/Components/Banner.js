import React, { useState } from "react";
import artist from "../img/artist.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones } from "react-icons/fa";
// banner
function Banner() {
  const [isFollowing, setIsFollowing] = useState(false);

  // Function to toggle the follow state when the button is clicked
  const toggleFollow = () => {
    setIsFollowing((prevState) => !prevState);
  };
  return (
    <div className="Banner">
      <img src={artist} alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home<span>/ Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-ha</h2>
              <img src={check} alt="" />
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1811 <span>Monthly Listeners</span>
            </p>
          </div>

          <div className="right">
            <a href="/"> Play</a>
            <button onClick={toggleFollow}>
              {/* <i>
                <FaCheck />
              </i> */}
              {isFollowing ? "Follow" : "Following"}
            </button>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
