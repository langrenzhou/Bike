import { UserInfoLogins, UserLogins, UserCookieLogin } from './type';
export const UserInfoLogin = value => {

  return {
    type: UserInfoLogins,
    value
  };
};
export const UserLogin = value => ({
  type: UserLogins,
  value
});
export const UserCookieLogins = value => {

  return {
    type: UserCookieLogin,
    value
  };
};