import { theme } from '@/styles/globals';
import { converterToRem } from '@/utils/pxToRem';
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  background-color: ${theme.colors.gray_50};
  color: ${theme.colors.gray_400};
  border: 0;
  padding: ${converterToRem(14)}rem ${converterToRem(16)}rem;
  margin-bottom: ${converterToRem(14)}rem;
  border-radius: 10rem;
  ::placeholder {
    color: ${theme.colors.gray_400};
    opacity: 1;
  }
`;
