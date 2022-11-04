import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [innerText, setInnerText] = useState("Press a Key");

  const drumPadArr = [
    {
      name: "heater1",
      keyCode: 81,
      id: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      name: "heater2",
      keyCode: 87,
      id: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      name: "heater3",
      keyCode: 69,
      id: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      name: "heater4",
      keyCode: 65,
      id: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      name: "clap",
      keyCode: 83,
      id: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      name: "openhh",
      keyCode: 68,
      id: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      name: "kicknhat",
      keyCode: 90,
      id: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      name: "kick",
      keyCode: 88,
      id: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      name: "closedhh",
      keyCode: 67,
      id: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playSound(value) {
    let soundName = drumPadArr.filter((e) => {
      /*  console.log({ e: e.id, value }); */
      return e.id === value;
    })[0].name;
    setInnerText(soundName);
    const audio = document.getElementById(value);
    audio.play();
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase());
    });
  }, []);

  return (
    <div className="App" id="drum-machine">
      <header className="App-header">
        <div className="container" id="display">
          {innerText}
        </div>
        <div className="row keys">
          {drumPadArr.map((drumPad) => (
            <div
              key={drumPad.id}
              onClick={() => {
                playSound(drumPad.id);
              }}
              className="drum-pad col-4"
              id={drumPad.name}
            >
              {drumPad.id}
              <audio className="clip" id={drumPad.id} src={drumPad.src}></audio>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
