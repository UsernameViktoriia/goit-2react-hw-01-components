import styled from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  typography,
  border,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  border,
  layout,
  flexbox,
  typography,
  shadow
);
