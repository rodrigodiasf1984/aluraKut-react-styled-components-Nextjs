import styled from 'styled-components';
import { converterToRem } from '@/utils/pxToRem';
import { theme } from '@/styles/globals';

export const Box = styled.div`
  background: #ffffff;
  border-radius: ${converterToRem(8)}rem;
  padding: ${converterToRem(16)}rem;

  margin-bottom: ${converterToRem(10)}rem;
  .boxLink {
    font-size: ${converterToRem(14)}rem;
    color: ${theme.colors.linkColor};
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: ${converterToRem(32)}rem;
    font-weight: 400;
    margin-bottom: ${converterToRem(20)}rem;
  }
  .subTitle {
    font-size: ${converterToRem(32)}rem;
    font-weight: 400;
    margin-bottom: ${converterToRem(20)}rem;
  }
  .smallTitle {
    margin-bottom: ${converterToRem(20)}rem;
    font-size: ${converterToRem(16)}rem;
    font-weight: 700;
    color: ${theme.colors.gray_400};
  }
  .hr {
    margin-top: ${converterToRem(12)}rem;
    margin-bottom: ${converterToRem(8)}rem;
    border-color: transparent;
  }
  .profilePicture {
    border-radius: ${converterToRem(8)}rem;
  }

  button {
    border: 0;
    padding: ${converterToRem(8)}rem ${converterToRem(12)}rem;
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.blue_50};
    border-radius: 10rem;
  }
`;
