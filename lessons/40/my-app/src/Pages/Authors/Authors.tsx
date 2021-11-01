import React from 'react';
import { AuthorTypes } from '../../types/AuthorTypes';

interface Props {
  authors: AuthorTypes[];
}

const Authors = ({authors}: Props) => {
 
  return (
    <>
      <ul>
        {authors.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Authors;