import React from "react";

interface CardListProps {
  lists: any[];
}

export const CardList: React.FC<CardListProps> = ({ lists }) => {
  return (
    <ul>
      {lists.map((list) => {
        return (
          <li key={list}>
            <i className="material-icons ">check_circle</i>
            <span> {list}</span>
          </li>
        );
      })}
    </ul>
  );
};
