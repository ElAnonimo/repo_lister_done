import { SET_REPOS } from './types';
import { Dispatch } from 'redux';
import {getReposBySearch} from '../api/github';
import {setError} from './error';

export const loadRepos = (query: string) => async (dispatch: Dispatch) => {
  try {
    const list = await getReposBySearch(query);
    
    dispatch({
      type: SET_REPOS,
      list,
    });
  } catch(err) {
    dispatch(setError(err.message));
  };
};

export const resetRepos = () => async (dispatch: Dispatch) => {
  dispatch({
    type: SET_REPOS,
    list: [],
  });
};