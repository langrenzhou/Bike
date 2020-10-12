import { UserInfoLogin, UserLogin } from './type';
const defaultState = {
  Login: false,
  UserInfo: {}
};
export default ((state = defaultState, action) => {
  if (action.type == UserInfoLogin) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.UserInfo = action.value;
    return newState;
  }

  if (action.type == UserLogin) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.Login = action.value;
    return newState;
  }
  return state;
});