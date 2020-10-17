export const getCookieFromReq = (req, cookie) => {
  const value = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookie}=`));
  if (!value) return undefined;
  return value.split('=')[1];
}