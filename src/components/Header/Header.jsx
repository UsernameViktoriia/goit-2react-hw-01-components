import { Box } from 'components/Box';
import { FilterKeyword } from 'components/FilterKeyword/FilterKeyword';
import { theme } from 'constants/theme';
import { Outlet } from 'react-router-dom';

export const Header = ({ value, onChange }) => {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #7B61FF"
      px="80px"
      height="92px"
      // @media screen and(min - width: ${ theme.breakpoints.mobile })
      // height={{ theme.breakpoints.mobile }: "168px"}
    >
      <Box
        as="h1"
        display="flex"
        justifyContent="center"
        color={theme.colors.primary}
        fontSize={theme.fontSizes.xm}
        fontWeight={theme.fontWeights.regular}
      >
        Event Planner
      </Box>
      <FilterKeyword value={value} onChange={onChange}></FilterKeyword>
      <Outlet />
    </Box>
  );
};
