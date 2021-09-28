import React from "react";

interface CardListProps {
  list: [];
}

export const CardList: React.FC<CardListProps> = (props) => {
  return (
    <ul>
      <li>
        <i className="material-icons"></i>
      </li>
    </ul>
  );
};
