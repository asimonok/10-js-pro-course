interface UsersType {
  id: number;
  name: string;
  username: string;
  email: string;
  //   address: {
  //     street: string;
  //     suite: string;
  //     city: string;
  //     zipcode: string;
  //     geo: {
  //       lat: string;
  //       lng: string;
  //     };
  //   };
  phone: string;
  website: string;
  //   company: {
  //     name: string;
  //     catchPhrase: string;
  //     bs: string;
  //   };
}

export enum UsersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: UsersType[];
}

interface FetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR;
  payload: string;
}
export interface UsersState {
  users: UsersType[];
  loading: boolean;
  error: null | string;
}
export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;
