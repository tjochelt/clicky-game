import React from "react";

function Header(props) {
  return (
    <>
      <header>
        <div className="title">Click-O-Matic</div>
        <div className="message">{props.message}</div>
        <div className="score">
          Score {props.score} of {props.total}
        </div>
        <div className="highScore">High Score {props.highScore}</div>
      </header>
      <br />
    </>
  );
}

export default Header;
