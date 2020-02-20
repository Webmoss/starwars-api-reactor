import gql from 'graphql-tag';

const STARSHIPS_QUERY = gql`
  query Starships {
    starships {
      id
      title
    }
  }
`;

export default STARSHIPS_QUERY;
