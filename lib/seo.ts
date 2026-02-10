export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.quirozautoheroes.com';

export const absoluteUrl = (path = '/') => {
  if (!path.startsWith('/')) {
    return path;
  }
  return `${SITE_URL}${path}`;
};
