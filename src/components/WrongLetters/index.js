import React from "react";
const Style = {
  marginRight: "11.5rem",
  marginTop: "21rem",
};
const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container" style={{ color: "#34495e" }}>
      <div style={Style}>
        <p>Wrong</p>
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
