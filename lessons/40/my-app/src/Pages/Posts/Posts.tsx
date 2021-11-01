import React, { useCallback } from 'react';
import Card from '../../components/Card/Card';
import { PostTypes } from '../../types/PostTypes';
import { AuthorTypes } from '../../types/AuthorTypes';
import Button from '../../components/Button';
import { useLocation, useHistory } from 'react-router-dom';

type Props = {
  openAuthorInfoModal: (requestedUserID: number) => void;
  posts: PostTypes[];
  authors: AuthorTypes[];
  rowNumber: number,
}

const Container = (props: Props) => {
  const { posts, authors, rowNumber, openAuthorInfoModal } = props;
  const location = useLocation();
  const history = useHistory();

  const onShowMore = useCallback(() => {
    const query = new URLSearchParams(location.search);
    const totalPosts = query.get('totalPosts') || '5';
    const displayLimit = parseInt(totalPosts, 10) + 5;
    query.set('totalPosts', displayLimit.toString());

    history.push(`${location.pathname}?${query.toString()}`);
  }, [history, location.pathname, location.search]);

  return (
    <>
      <div>
      <div className="container">
            {posts.slice(0, rowNumber).map( elem => {
                return <Card
                    openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
                    post={elem}
                    authors={authors}/>    
                          
             } )}
        </div>
      </div>
      <Button text="Show more" onClick={onShowMore} />
    </>
  );
};

export default Container;
