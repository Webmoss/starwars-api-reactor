import gql from 'graphql-tag';

const VEHICLES_QUERY = gql`
  query Vehicles {
    vehicles {
      id
      title
    }
  }
`;

export default VEHICLES_QUERY;
