import React from "react";

function Board(props) {
  return (
    <div id="board">
      <div className="container">
        <div className="row">
          {props.images.map(image => (
            <div
              style={{ backgroundColor: image.color }}
              className="image col-4-md"
              id={"image-" + image}
              key={image.index}
              onClick={() => {
                props.clickHandler(image.index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
