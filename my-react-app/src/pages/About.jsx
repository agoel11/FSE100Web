import React from "react";

function Game2() {
  return (
    <div className="new">
      <div>
        <h1>About:</h1>
        <p>This is the website we made for our FSE 100 Capstone Project.</p>
        <p>
          It includes 3 different games designed to help people maintain their
          dexterity and hand eye coordination.
        </p>
        <p>
          This website was made using React.js and the framework Vite. It is a
          combination of JSX, HTML, and CSS. It also houses 3 different games
          which were made using the p5.js framework.
        </p>
        <h1>Credits:</h1>
        <p>This website was created by Atharva Goel.</p>
        <p>Game 1 was created by: Isabella Sandoval, Sriharsha Silasagaram</p>
        <p>Game 2 was created by: Jesse Kilgore, Andrew Tan</p>
        <p>Game 3 was creare by: CJ Cat, Jay Branton</p>
      </div>
      <img src="sun.png" alt="Example" className="img"/>
      <img src="asu.png" alt="Example" className="img2"/>
    </div>
  );
}

export default Game2;
