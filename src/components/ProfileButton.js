import "./ProfileButton.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileButton() {
  const [isShown, setIsShown] = useState(false);

  const profileButtonToggle = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  return (
    <>
      <div className="menu-container">
        <div
          className="profile-container"
          onClick={profileButtonToggle}
          style={{ backgroundColor: isShown ? "#474747" : null }}
        >
          <div className="circle-container">
            <i className="far fa-user"></i>
          </div>
          <p>Emmanuel</p>

          <i
            className="fas fa-sort-down"
            style={{ transform: isShown ? "rotate(180deg)" : null }}
          ></i>
        </div>

        <div
          className="dropdown-menu"
          style={{ display: isShown ? "block" : null }}
        >
          <Link to="/">
            <a>Home</a>
          </Link>
          <a>Log Out</a>
        </div>
      </div>
    </>
  );
}
