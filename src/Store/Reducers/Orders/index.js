import * as types from '../../actionTypes';

const initialState = {
  loading: false,
};

const Home = (state = initialState, action) => {
  switch (action.type) {
    case `${types}_PENDING`:
      return {
        ...state,
      };

    case `${types}_FULFILLED`:
      return {
        ...state,
      };
    case `${types}_REJECTED`:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default Home;
