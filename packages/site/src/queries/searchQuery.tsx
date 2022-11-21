import { gql } from '@apollo/client';

export const searchQuery = gql`
  query Search($searchTerm: String!) {
    mainSearch(first: 10, options: { searchTerm: $searchTerm, type: TITLE }) {
      edges {
        node {
          entity {
            ... on Title {
              id
            }
          }
        }
      }
    }
  }
`;
