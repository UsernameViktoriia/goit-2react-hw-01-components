import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 296px;
`;

export const EventTitleBig = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.semiBold};
  line-height: ${theme.lineHeights.heading};
  color: ${theme.colors.black};
`;

export const EventDescriptionBig = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.body};
  color: #49454f;
  margin-left: ${theme.space[4]}px;
  margin-right: ${theme.space[6]}px;
  margin-top: 20px;
  margin-bottom: 15px;
`;
