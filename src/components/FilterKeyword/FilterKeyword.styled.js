import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const Input = styled.input`
  width: 410px;
  margin-bottom: 22px;
  margin-top: 22px;
  padding: ${theme.space[5]}px;
  padding-left: 48px;
  height: 48px;
  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: #888;
  font-size: ${theme.fontSizes.s};
  font-weight: 300;
`;
