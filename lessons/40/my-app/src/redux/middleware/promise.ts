import { Middleware } from 'redux';
import {
  DataAction,
  DataType,
  startLoading,
  resolve,
  reject,
} from 'redux/actions/dataActions';
import { RootState } from 'redux/store/store';

type FetchPayload = { type: DataType; request: PromiseLike<any> };

export const promise: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (action.type === DataAction.Fetch) {
      const {
        payload: { type, request },
      }: { payload: FetchPayload } = action;
      store.dispatch(startLoading(type));
      request
        .then((result) => result.json())
        .then((data) => {
          store.dispatch(resolve(type, data));
        });
      store.dispatch(reject(type));
    }
    return next(action);
  };
