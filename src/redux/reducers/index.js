import { combineReducers } from 'redux';

import promotions from './promotions';
import login from './login';
import common from './common';

const appReducer = combineReducers({
  promotions,
  login,
  common
});

export default appReducer;
