import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface Istate {
  player: {
    name: string;
    age: string;
    position: string;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [player, setPlayer] = useState<Istate["player"]>([
    {
      name: "Ronaldo",
      age: "35",
      position: "FW",
      url: "https://avatars.githubusercontent.com/u/50352586?v=4",
      note: "This is note"
    },
  ]);

  return (
    <div className="App">
      <h1>Best Football Player</h1>
      <List player={player} />
      <AddToList player={player} setPlayer={setPlayer}/>
    </div>
  );
}

export default App;
