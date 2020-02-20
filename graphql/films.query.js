import gql from 'graphql-tag';

const FILMS_QUERY = gql`
  query Films($id: ID!) {
    Films(id: $id) {
      id
      title
    }
  }
`;

export default FILMS_QUERY;
