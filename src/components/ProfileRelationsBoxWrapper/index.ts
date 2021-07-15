import styled from 'styled-components';
import { theme } from '@/styles/globals';
import { converterToRem } from '@/utils/pxToRem';
import { Box } from '../Box';

export const ProfileRelationsBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: ${converterToRem(8)}rem;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: ${converterToRem(102)}rem;
    position: relative;
    overflow: hidden;
    border-radius: ${converterToRem(8)}rem;
    span {
      color: ${theme.colors.secondary};
      font-size: ${converterToRem(10)}rem;
      position: absolute;
      left: 0;
      bottom: ${converterToRem(10)}rem;
      z-index: 2;
      padding: 0 ${converterToRem(4)}rem;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      background-image: linear-gradient(0deg, #00000073, transparent);
    }
  }
`;
