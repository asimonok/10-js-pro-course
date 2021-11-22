export type ActionPayload<TType = any, PType = any> = {
  type: TType;
  payload: PType;
};

export enum TodoFilter {
  All = "All",
  Done = "Done",
  Todo = "Todo",
}
