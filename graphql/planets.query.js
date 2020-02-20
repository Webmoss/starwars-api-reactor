import gql from 'graphql-tag';

const PLANETS_QUERY = gql`
  query Planets {
    planets {
      id
      name
      created
      edited
      climate
      films
      gravity
      orbital_period
      rotation_period
      population
      residents
    }
  }
`;

export default PLANETS_QUERY;
