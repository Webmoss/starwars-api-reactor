import gql from 'graphql-tag';

const PEOPLE_QUERY = gql`
  query People {
    people {
      id
      title
    }
  }
`;

export default PEOPLE_QUERY;
