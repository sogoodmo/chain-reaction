import { gql } from '@apollo/client';

export const getNameQuery = gql`
  query GetName($id: ID!) {
    name(id: $id) {
      canonicalUrl
      id
      nameText {
        text
      }
      akas(first: 5) {
        edges {
          node {
            text
          }
        }
      }
      credits(first: 1000) {
        edges {
          node {
            title {
              id
              titleText {
                text
              }
              canonicalUrl
              primaryImage {
                url
              }
            }
          }
        }
        total
      }
      awardNominations(first: 25, filter: { wins: WINS_ONLY }) {
        edges {
          node {
            award {
              text
              event {
                text
              }
              year
              category {
                text
              }
            }
            isWinner
          }
        }
      }
      knownFor(first: 100) {
        edges {
          node {
            title {
              id
              titleText {
                text
              }
              canonicalUrl
              primaryImage {
                url
              }
            }
            summary {
              principalCategory {
                text
              }
              principalCharacters {
                name
              }
            }
          }
        }
        total
      }
    }
  }
`;
