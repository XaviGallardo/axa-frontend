import styled, { css } from 'styled-components';

const GnomePicture = styled.div`
  height: 105px;
  width: 105px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 50%;
    padding: 0.5rem;
    border: 5px solid ${props => props.hairColor};
  }
  ${props =>
    props.detailed &&
    css`
      height: 180px;
      width: 180px;
      margin: 0 auto;
    `};
`;

export default GnomePicture;
