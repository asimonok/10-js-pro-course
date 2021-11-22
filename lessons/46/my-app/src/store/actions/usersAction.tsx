import { Action } from "redux";
import { ActionPayload } from "Common/ActionPayload";
import UserInfoItem from "Common/UserInfoItem";
import { UsersActionType } from "store/types/types";
import { Dispatch } from "react";

type FetchUserAction = Action<UsersActionType.FETCH_USERS>;
type FetchSuccessUserAction = ActionPayload<
  UsersActionType.FETCH_USERS_SUCCESS,
  UserInfoItem[]
>;

export type UsersAction = FetchUserAction | FetchSuccessUserAction;

export const fetchUsers = () => {
  return (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: UsersActionType.FETCH_USERS });
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response): Promise<UserInfoItem[]> => response.json())
      .then((users) => {
        dispatch({ type: UsersActionType.FETCH_USERS_SUCCESS, payload: users });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const limitUsers = () => {
  return {
    type: UsersActionType.CARDS_LIMIT,
  };
};
