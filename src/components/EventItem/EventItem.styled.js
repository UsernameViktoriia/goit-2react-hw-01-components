import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 296px;
`;

export const EventTitle = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.heading};
  color: '#1C1B1F';
  margin: ${theme.space[6]}px;
`;

export const EventDescription = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.body};
  color: '#1C1B1F';
  margin-left: ${theme.space[6]}px;
  margin-right: ${theme.space[6]}px;
`;
