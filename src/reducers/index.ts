import { combineReducers } from "redux";
import repo from './repo';
import branch from './branch';
import error from './error';

export const rootReducer = combineReducers({
  repo,
  branch,
  error,
});

export type AppState = ReturnType<typeof rootReducer>;
