import styled from 'styled-components';

import {
  space,
  layout,
  color,
  flexbox,
  typography,
  border,
  shadow,
  grid,
  position,
  background,
} from 'styled-system';

export const Box = styled('div')(
  color,
  position,
  space,
  background,
  border,
  layout,
  flexbox,
  typography,
  grid,
  shadow
);
