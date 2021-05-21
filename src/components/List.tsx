import React from "react";
import { Istate as IProps } from '../App'

const List: React.FC<IProps> = ({ player }) => {
  const renderList = () => {
    return player.map((player) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={player.url} />
            <h2>{player.name}</h2>
          </div>
          <p>{player.age} year old</p>
          <p>{player.position}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
