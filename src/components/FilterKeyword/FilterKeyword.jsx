import { FiSearch } from 'react-icons/fi';
import { Box } from 'components/Box';
import { theme } from 'constants/theme';
import { Input } from './FilterKeyword.styled';

export const FilterKeyword = ({ value, onChange }) => (
  <Box position="relative">
    <Box position="absolute" top="38px" left="18px">
      <FiSearch color={theme.colors.primary} />
    </Box>

    <Input
      placeholder="Search by keywords"
      type="text"
      value={value}
      onChange={onChange}
    ></Input>
  </Box>
);
