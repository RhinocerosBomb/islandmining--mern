import appReducer from '../App/reducer';
import itemsReducer from '../Items/reducer';
import signUpReducer from '../SignUp/reducer';
import sessionReducer from '../Session/reducer';
import { reducer as formReducer } from 'redux-form';

export default {
  form: formReducer,
  app: appReducer,
  itemsReducer: itemsReducer,
  signUpReducer: signUpReducer,
  sessionReducer: sessionReducer,
};
