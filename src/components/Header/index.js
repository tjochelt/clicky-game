import React from "react";

function Header(props) {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="title">The clickiest of games</div>
        <div className="message">{props.message}</div>
        <div className="score">
          You've guessed {props.score} of {props.total}
        </div>
        <div className="highScore">High Score: {props.highScore}</div>
      </nav>
      <br />
    </>
  );
}

export default Header;
