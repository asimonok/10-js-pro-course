import { ActionPayload } from 'redux/models/ActionPayload';

export enum DataAction {
  Fetch = 'data/fetch',
  StartLoading = 'data/start',
  Resolve = 'data/resolve',
  Reject = 'data/reject',
}

export enum DataType {
  Posts = 'Posts',
  Users = 'Users',
  Comments = 'Comments',
}

type FetchAction = ActionPayload<
  DataAction.Fetch,
  { type: DataType; request: PromiseLike<any> }
>;
type StartLoadingAction = ActionPayload<DataAction.StartLoading, DataType>;
type ResolveAction<TypeResult> = ActionPayload<
  DataAction.Resolve,
  { type: DataType; result: TypeResult }
>;
type RejectAction = ActionPayload<DataAction.Reject, DataType>;

export const makeFetch = (
  type: DataType,
  request: PromiseLike<any>
): FetchAction => ({
  type: DataAction.Fetch,
  payload: {
    type,
    request,
  },
});

export const startLoading = (dataType: DataType): StartLoadingAction => ({
  type: DataAction.StartLoading,
  payload: dataType,
});

export const resolve = <TypeResult>(
  dataType: DataType,
  data: TypeResult
): ResolveAction<TypeResult> => ({
  type: DataAction.Resolve,
  payload: { type: dataType, result: data },
});

export const reject = (dataType: DataType): RejectAction => ({
  type: DataAction.Reject,
  payload: dataType,
});

export type DataActions =
  | StartLoadingAction
  | ResolveAction<any>
  | RejectAction;
