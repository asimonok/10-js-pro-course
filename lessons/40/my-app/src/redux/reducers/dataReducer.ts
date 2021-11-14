import { DataAction, DataActions } from 'redux/actions/dataActions';

type State = {
  [key: string]: {
    isLoading: boolean;
    isLoaded: boolean;
    value: any;
  };
};

const initialState = {};

export const dataReducer = (
  state: State = initialState,
  action: DataActions
) => {
  switch (action.type) {
    case DataAction.StartLoading: {
      return {
        ...state,
        [action.payload]: {
          isLoading: true,
          isLoaded: false,
          value: null,
        },
      };
    }
    case DataAction.Resolve: {
      return {
        ...state,
        [action.payload.type]: {
          isLoading: false,
          isLoaded: true,
          value: action.payload.result,
        },
      };
    }
    case DataAction.Reject: {
      return {
        ...state,
        [action.payload]: {
          isLoading: false,
          isLoaded: false,
          value: null,
        },
      };
    }
    default:
      return state;
  }
};
