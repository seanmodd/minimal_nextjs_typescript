// next
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
// config
import { defaultSettings, cookiesKey } from '../config';

// ----------------------------------------------------------------------

export const getSettings = (cookies: NextApiRequestCookies) => {
  const themeMode = getData(cookies[cookiesKey.themeMode]) || defaultSettings.themeMode;

  const themeDirection =
    getData(cookies[cookiesKey.themeDirection]) || defaultSettings.themeDirection;

  const themeColorPresets =
    getData(cookies[cookiesKey.themeColorPresets]) || defaultSettings.themeColorPresets;

  const themeStretch = getData(cookies[cookiesKey.themeStretch]) || defaultSettings.themeStretch;

  return {
    themeMode,
    themeDirection,
    themeColorPresets,
    themeStretch,
  };
};

// ----------------------------------------------------------------------

const getData = (value: string) => {
  if (value === 'true' || value === 'false') {
    return JSON.parse(value);
  }
  if (value === 'undefined' || !value) {
    return '';
  }
  return value;
};
