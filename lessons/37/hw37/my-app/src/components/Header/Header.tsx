import React from "react";
import "./Header.css";

type Props = {
  titleSite: string;
};

const Header = ({ titleSite }: Props) => {
  return (
    <div className="header">
      <h1 className="header-title">{titleSite}</h1>
    </div>
  );
};

export default Header;
