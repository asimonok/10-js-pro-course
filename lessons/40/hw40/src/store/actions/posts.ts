import { Dispatch } from "react"
import {PostAction} from 'store/PostReducer'
import {Post} from 'types/types'

export enum PostActionType {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
}

// export const fetchUsers = () => {
//     return (dispatch: Dispatch<UserAction>) => {
//         dispatch({type: UserActionType.FETCH_USERS})
//         fetch(`https://jsonplaceholder.typicode.com/users`)
//           .then((response):Promise<User[]> => response.json())
//           .then( users => {
//             dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: users})
//         }).catch(error => {
//             console.log(error);
//         })
//     }
// }

export const fetchPosts = () => {
    return (dispatch: Dispatch<PostAction>) => {
        dispatch({type: PostActionType.FETCH_POSTS})
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response):Promise<Post[]> => response.json())
        .then(posts => {
            dispatch({type: PostActionType.FETCH_POSTS_SUCCESS, payload: posts})
        })
        .catch(error => console.log(error));
    }
}