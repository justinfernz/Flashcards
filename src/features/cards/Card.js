import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import selector
import { useSelector } from "react-redux";
import { selectCards } from "./cardsSlice";

let uniqueId = uuidv4();
console.log(uniqueId);

export default function Card({ id }) {
  const cards = useSelector(selectCards);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
