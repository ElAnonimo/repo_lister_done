
import { SET_BRANCHES } from './types';
import { Dispatch } from 'redux';
import {getRepoBranches} from '../api/github';
import {setError} from './error';

export const loadBranches = (url: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: SET_BRANCHES,
        list: [],
      });

      const list = await getRepoBranches(url);
      
      dispatch({
        type: SET_BRANCHES,
        list,
      });
    } catch (err) {
      dispatch(setError(await err.message));
    }
  }