import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙏": "Folded Hands",
  "🙌": "Raising Hands",
  "👋": "Waving Hand",
  "✊": "Raised Fist",
  "✌️": "Victory Hand",
  "🤘": "Rock On",
  "🤲": "Praying Gesture",
  "🤝": "Handshake",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down"
};
const emojis = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function onchangeHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database.";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Fun with Emojis</h1>
      <h3>Enter an emoji or click an emoji shown below to know the meaning.</h3>
      <input onChange={onchangeHandler}></input>
      <h3>Emojis in our database 👇</h3>
      <h3>
        <u>{meaning}</u>
      </h3>
      {emojis.map((emoji) => {
        return (
          <span
            class="emoji"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <footer className="footer">Made by Avneet with 💝 </footer>
    </div>
  );
}
