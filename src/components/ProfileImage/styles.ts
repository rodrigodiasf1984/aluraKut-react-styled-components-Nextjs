import styled from 'styled-components';
import { converterToRem } from '@/utils/pxToRem';
import { Box } from '../Box';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .profilePicture {
    border-radius: ${converterToRem(8)}rem;
  }
  > span {
    padding: ${converterToRem(8)}rem 0;
  }
`;
