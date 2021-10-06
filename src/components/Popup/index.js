import Button from "@restart/ui/esm/Button";
import React, { useEffect } from "react";
import { checkWin } from "../../Helper/index";

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Ma bravo! ";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Drugi put više srece";
    finalMessageRevealWord = `... da si napisao  "${selectedWord}" pobjedio bi `;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <Button onClick={playAgain}>Play Again</Button>
      </div>
    </div>
  );
};

export default Popup;
