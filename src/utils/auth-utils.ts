import Cookie from 'js-cookie';
import SSRCookie from 'cookie';
import {
  ADMIN,
  AUTH_CRED,
  OFFICE,
  VIEW,
  PERMISSIONS,
  TOKEN,
} from './constants';

export const allowedRoles = [OFFICE, ADMIN, VIEW];
export const adminOnly = [ADMIN];

export function setAuthCredentials(permissions: string[], token: string) {
  Cookie.set(AUTH_CRED, JSON.stringify({ token, permissions }));
}

export function getAuthCredentials(context?: any): {
  permissions: string[] | null;
  token: string | null
} {
  let authCred;
  if (context) {
    authCred = parseSSRCookie(context)[AUTH_CRED];
  } else {
    authCred = Cookie.get(AUTH_CRED);
  }
  if (authCred) {
    return JSON.parse(authCred);
  }
  return { permissions: null, token: null };
}

export function parseSSRCookie(context: any) {
  return SSRCookie.parse(context.req.headers.cookie ?? '');
}

export function hasAccess(
  _allowedRoles: string[],
  _userPermissions: string[] | undefined | null
) {
  if (_userPermissions) {
    return Boolean(
      _allowedRoles?.find((aRole) => _userPermissions.includes(aRole))
    );
  }
  return false;
}
export function isAuthenticated(_cookies: any) {
  return (
    !!_cookies[TOKEN] &&
    Array.isArray(_cookies[PERMISSIONS]) &&
    !!_cookies[PERMISSIONS].length
  );
}
