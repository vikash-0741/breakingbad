import * as types from '../../actionTypes';

const initialState = {
  loading: false,
  users: [],
};

const Home = (state = initialState, action) => {
  const {payload} = action;

  switch (action.type) {
    case `${types.GET_USERS_DATA}_PENDING`:
      return {
        ...state,
      };

    case `${types.GET_USERS_DATA}_FULFILLED`:
      return {
        ...state,
        users: payload,
      };
    case `${types.GET_USERS_DATA}_REJECTED`:
      return {
        ...state,
      };

    case `${types.FAVORITE_CHANGE}`:
      const newUsers = state.users.map(obj => {
        if (obj.id === payload) {
          return {...obj, favorite: !obj.favorite};
        }
        return obj;
      });

      return {
        ...state,
        users: newUsers,
      };

    default:
      return state;
  }
};

export default Home;
