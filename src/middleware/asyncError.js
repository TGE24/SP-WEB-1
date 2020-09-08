import isPromise from "helpers/isPromise";

export default function asyncError(store) {
  return (next) => (action) => {
    if (!isPromise(action.payload)) {
      return next(action);
    }
    return next(action).catch((error) => {
      return error;
    });
  };
}
