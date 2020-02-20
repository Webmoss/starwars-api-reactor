import gql from 'graphql-tag';

const SPECIES_QUERY = gql`
  query Species {
    species {
      id
      title
    }
  }
`;

export default SPECIES_QUERY;
