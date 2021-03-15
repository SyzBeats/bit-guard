import { USER_LOGGEDIN } from '../reducerTypes';

import { AppState, Action } from '../../typings/types-context';

export default (state: AppState, action: Action) => {
  switch (action.type) {
    case USER_LOGGEDIN: {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
