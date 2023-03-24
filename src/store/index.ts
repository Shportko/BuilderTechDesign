import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
  Reducer,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { DialogReducer } from "./dialog/reducers";
import { IDialogReducerState, TDialogActionTypes } from "./dialog/types";
import { MainReducer } from "./main/reducers";
import { ToastActionTypes, TToastReducerState } from "./toast/types";
import { IMainReducerState, MainActionTypes } from "./main/types";
import { ToastReducer } from "./toast/reducers";

export type TRootState = {
  MainReducer: IMainReducerState;
  DialogReducer: IDialogReducerState;
  ToastReducer: TToastReducerState;
};

type TAvailableActions =
  | MainActionTypes
  | TDialogActionTypes
  | ToastActionTypes;

function createReducer(): Reducer<TRootState, TAvailableActions> {
  return combineReducers({
    MainReducer,
    DialogReducer,
    ToastReducer,
  });
}

const rootReducer = createReducer();

export default function configureStore() {
  const middlewareEnhancer = applyMiddleware(thunkMiddleware);

  const composedEnhancers = compose(middlewareEnhancer);

  const store = createStore(rootReducer, composedEnhancers);

  return store;
}
