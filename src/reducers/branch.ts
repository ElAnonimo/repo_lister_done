import { SET_BRANCHES } from "../actions/types";
import { Action, Reducer } from 'redux';
import {IBranch} from 'types';

export interface IRepoBrancheState {
  readonly list: IBranch[]
}

interface IGetRepoBranches extends Action<typeof SET_BRANCHES> {
  list: IBranch[]
}

const initialState: IRepoBrancheState = {
  list: []
};

export const reducer: Reducer<IRepoBrancheState, IGetRepoBranches> = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRANCHES:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};

export default reducer;