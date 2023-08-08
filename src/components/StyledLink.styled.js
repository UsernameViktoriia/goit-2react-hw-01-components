import styled from '@emotion/styled';
import { theme } from 'constants/theme';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: absolute;
  top: 20px;
  display: flex;
  gap: ${theme.space[3]}px;
  text-decoration: none;
  color: ${theme.colors.primary};
`;
