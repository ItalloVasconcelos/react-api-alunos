import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};
// Adicione um tipo para a ação
// eslint-disable-next-line default-param-last
export default function botaoClicadoReducer(state = initialState, action) {
  switch (action.type) {
    // case types.LOGIN_REQUEST: {
    //   console.log('REDUCER', action.payload);
    //   return state;
    // }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    default:
      return state;
  }
}
