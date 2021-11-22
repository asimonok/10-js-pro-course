import * as Actions from "../actions/usersAction";
import { UsersActionType } from "store/types/types";
import UserInfoItem from "Common/UserInfoItem";
import { UsersAction } from "store/actions/usersAction";

type State = {
  users: UserInfoItem[];
  loading: boolean;
  error: string;
};

const initialState: State = {
  users: [],
  loading: false,
  error: "",
};

export const usersReducer = (
  state: State = initialState,
  action: UsersAction
): State => {
  switch (action.type) {
    case UsersActionType.FETCH_USERS: {
      return {
        ...state,
        users: [],
        loading: true,
      };
    }
    case UsersActionType.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        users: [...state.users, ...action.payload],
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
