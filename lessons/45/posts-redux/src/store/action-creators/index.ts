import * as PostsActionCreators from "./posts";
import * as UsersActionCreators from "./users";
import * as CommentsActionCreators from "./comments";

const ActionCreators = {
  ...PostsActionCreators,
  ...UsersActionCreators,
  ...CommentsActionCreators,
};

export default ActionCreators;
