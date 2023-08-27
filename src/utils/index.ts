import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const getCountryOfOrigin = (shipOwner: string) => {
  const regex = /\(([^)]+)\)/;
  const matches = regex.exec(shipOwner);
  const matchIndex = 1;

  return matches?.[matchIndex];
};

export const useFlexibleSizes = <T>(sizes: {
  [key in Breakpoint]: T;
}) => {
  const theme = useTheme();

  const currentBreakpoint = Object.keys(sizes)
    .map((key) => {
      return { key: key, value: useMediaQuery(theme.breakpoints.up(key as Breakpoint)) };
    })
    .reverse()
    .find((br) => br.value)?.key;

  return sizes[currentBreakpoint as Breakpoint];
};
