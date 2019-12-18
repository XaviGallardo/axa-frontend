import styled, { css } from 'styled-components';

const GnomeName = styled.h2`
  font-size: 2.7rem;
  line-height: 2.8rem;
  ${props =>
    props.friend &&
    css`
      font-size: 1.5rem;
    `};
`;

export default GnomeName;
