import React, { useState } from "react";
import { Istate as Props } from "../App";

interface IProps {
  player: Props["player"];
  setPlayer: React.Dispatch<React.SetStateAction<Props["player"]>>;
}

const AddToList: React.FC<IProps> = ({ player, setPlayer }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
    position: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age) return;

    setPlayer([
      ...player,
      {
        name: input.name,
        age: input.age,
        note: input.note,
        position: input.position,
        url: input.url,
      },
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      url: "",
      position: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="image url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <input
        type="text"
        placeholder="position"
        className="AddToList-input"
        value={input.position}
        onChange={handleChange}
        name="position"
      />
      <textarea
        placeholder="note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
