import styled from 'styled-components';

const GnomeCard = styled.div`
  background-color: ${props => props.theme.lightgrey};
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  border: 1px solid ${props => props.hairColor};
  border-top: 15px solid ${props => props.hairColor};
  max-height: 90vh;
`;

export default GnomeCard;
