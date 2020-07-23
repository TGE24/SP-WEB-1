import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import reducers from "./rootReducer";

// @ts-ignore
const composeEnhancers = compose;

const enhancers = composeEnhancers(
  applyMiddleware(reduxThunk, promise)
);

const persistConfig = {
  key: "Spreadprolimited",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);

export default store;
