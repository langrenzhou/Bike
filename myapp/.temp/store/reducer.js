import { UserInfoLogins, UserLogins, UserCookieLogin } from './type';
const defaultState = {
  Login: false,
  UserInfo: {}
};
export default ((state = defaultState, action) => {
  if (action.type == UserInfoLogins) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.UserInfo = action.value;
    return newState;
  }

  if (action.type == UserLogins) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.Login = action.value;
    return newState;
  }
  if (action.type == UserCookieLogin) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.UserInfo = action.value;
    return newState;
  }
  return state;
});