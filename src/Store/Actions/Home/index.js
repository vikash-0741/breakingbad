import {useDispatch} from 'react-redux';
import ApiCall from '../../../utiles';
import * as types from '../../actionTypes';

export default function useOrderActions() {
  const dispatch = useDispatch();

  const getUsersData = data =>
    dispatch({
      type: types.GET_USERS_DATA,
      payload: async () => {
        try {
          const response = await ApiCall({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET',
          });
          const newArray = response.data.map((item, index) => {
            return {...item, favorite: false};
          });
          return newArray;
        } catch (err) {
          return Promise.reject(err);
        }
      },
    });

  const handleFav = data => {
    dispatch({
      type: types.FAVORITE_CHANGE,
      payload: data,
    });
  };

  return {
    getUsersData,
    handleFav,
  };
}
