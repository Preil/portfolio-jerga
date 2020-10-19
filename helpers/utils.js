export const getCookieFromReq = (req, cookie) => {
  const value = req.headers.cookie? req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookie}=`)) : undefined;
  if (!value) return undefined;
  return value.split('=')[1];
}