import gql from 'graphql-tag';

const FILMS_QUERY = gql`
  query Films {
    films {
      id
      episodeId
      title
      director
      producers
      releaseDate
      openingCrawl
      characters {
        name
        gender
      }
      planets { 
        name
      }
      species{
        name
      }
      starships{
        name
      }
      vehicles{
        name
      }
    }
  }
`;

// console.log("FILMS_QUERY", FILMS_QUERY);

export default FILMS_QUERY;
