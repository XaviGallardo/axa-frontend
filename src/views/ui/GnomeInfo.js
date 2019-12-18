import styled, { css } from 'styled-components';

const GnomeInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  ${props =>
    props.detailed &&
    css`
      margin-top: 10px;
      grid-template-columns: 1fr 1fr 1fr;
      line-height: 1.3;
    `};
`;

export default GnomeInfo;
