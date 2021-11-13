import * as PostsActionCreators from "./posts";
import * as UsersActionCreators from "./users";

const ActionCreators = {
  ...PostsActionCreators,
  ...UsersActionCreators,
};

export default ActionCreators;
