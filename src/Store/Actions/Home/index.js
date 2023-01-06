import {useDispatch} from 'react-redux';
import * as types from '../../actionTypes';

export default function useOrderActions() {
  const dispatch = useDispatch();

  const getUsersData = data =>
    dispatch({
      type: types,
      payload: async () => {
        try {
          // return Promise.resolve(request);
        } catch (err) {
          return Promise.reject(err);
        }
      },
    });

  return {
    getUsersData,
  };
}
