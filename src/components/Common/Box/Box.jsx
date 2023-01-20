import styled from 'styled-components';
import {
  space,
  color,
  layout,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system';

export const Box = styled.div(
  {
    boxSizing: 'border-box',
  },
  space,
  color,
  layout,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
);
