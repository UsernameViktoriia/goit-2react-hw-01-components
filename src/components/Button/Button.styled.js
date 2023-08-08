import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 193px;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.medium};
  padding: ${theme.space[6]}px ${theme.space[5]}px;
  border: ${theme.borders.none};
  border-radius: ${theme.radii.preMedium};
  box-shadow: ${theme.shadows.custom};
  text-decoration: none;
  cursor: pointer;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${theme.colors.hover};
  }

  :disabled {
    background-color: ${theme.colors.grey};
  }
`;

export const MoreInfoButton = styled(StyledButton)`
  width: 114px;
  font-size: ${theme.fontSizes.s};
  padding: ${theme.space[4]}px ${theme.space[7]}px;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const DeleteButton = styled(StyledButton)`
  width: 108px;
  border-radius: ${theme.radii.small};
  font-size: ${theme.fontSizes.xs};
  padding: ${theme.space[3]}px ${theme.space[6]}px;
  position: absolute;
  bottom: 40px;
  right: 40px;
`;

export const BackButton = styled(StyledButton)`
  width: 108px;
  border-radius: ${theme.radii.small};
  font-size: ${theme.fontSizes.xs};
  padding: ${theme.space[3]}px ${theme.space[6]}px;
`;
