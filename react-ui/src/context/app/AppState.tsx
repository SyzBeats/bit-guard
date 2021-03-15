import React, { useReducer } from 'react';
import AppReducer from './appReducer';
import { AppContext } from './appContext';
import { USER_LOGGEDIN } from '../reducerTypes';

const AppState = (props: any) => {
  const initialState = {
    isAuthenticated: false,
  };

  const [state, dispatch]: [any, any] = useReducer<any>(
    AppReducer,
    initialState,
  );

  const login = (user: object) => {
    dispatch({ type: USER_LOGGEDIN, payLoad: user });
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

AppState.propTypes = {};

export default AppState;
