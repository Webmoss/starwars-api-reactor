import gql from 'graphql-tag';

const FILMS_QUERY = gql`
  {
    films {
      id
      title
    }
  }
`;

export default FILMS_QUERY;
