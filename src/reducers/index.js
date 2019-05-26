import { combineReducers } from 'redux'
import { user } from './user'
import { recipients } from './recipients'

const entityReducer = combineReducers({
  recipients
});

const rootReducer = combineReducers({
  entities: entityReducer,
  user
});

export default rootReducer;
