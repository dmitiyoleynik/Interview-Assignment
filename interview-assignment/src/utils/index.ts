import { useMediaQuery, useTheme } from '@mui/material';

export const getCountryOfOrigin = (shipOwner: string) => {
  const regex = /\(([^)]+)\)/;
  const matches = regex.exec(shipOwner);

  return matches && matches[1];
};

type size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg';

type sizes<T> = {
  xxs: T;
  xs: T;
  sm: T;
  md: T;
  lg: T;
};

export const useFlexibleSizes = <T>(sizes: sizes<T>) => {
  const theme = useTheme();

  const breakpointsMap: { useMediaQueryResult: boolean; type: size }[] = [
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.up('lg')),
      type: 'lg',
    },
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.up('md')),
      type: 'md',
    },
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.up('sm')),
      type: 'sm',
    },
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.up(280)),
      type: 'xs',
    },
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.down(280)),
      type: 'xxs',
    },
  ];
  console.log({ breakpointsMap });

  const matchingBreakpoint = breakpointsMap.find((s) => s.useMediaQueryResult);

  return matchingBreakpoint ? sizes[matchingBreakpoint.type] : sizes.xxs;
};
