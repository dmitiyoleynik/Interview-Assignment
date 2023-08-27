import { useMediaQuery, useTheme } from '@mui/material';

export const getCountryOfOrigin = (shipOwner: string) => {
  const regex = /\(([^)]+)\)/;
  const matches = regex.exec(shipOwner);
  const matchIndex = 1;

  return matches?.[matchIndex];
};

enum Size {
  'xxs' = 'xxs',
  'xs' = 'xs',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
}

type Sizes<T> = {
  [key in Size]: T;
};

export const useFlexibleSizes = <T>(sizes: Sizes<T>) => {
  const theme = useTheme();

  const breakpointsMap: { useMediaQueryResult: boolean; type: Size }[] = [
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.up('lg')),
      type: Size.lg,
    },
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.up('md')),
      type: Size.md,
    },
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.up('sm')),
      type: Size.sm,
    },
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.up(280)),
      type: Size.xs,
    },
    {
      useMediaQueryResult: useMediaQuery(theme.breakpoints.down(280)),
      type: Size.xxs,
    },
  ];
  console.log({ breakpointsMap });

  const matchingBreakpoint = breakpointsMap.find((s) => s.useMediaQueryResult);

  return matchingBreakpoint ? sizes[matchingBreakpoint.type] : sizes.xxs;
};
