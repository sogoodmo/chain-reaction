import { gql } from '@apollo/client';

export const getTitleQuery = gql`
  query GetTitle($id: ID!) {
    title(id: $id) {
      id
      canonicalUrl
      Directors: credits(first: 1, filter: { categories: "director" }) {
        edges {
          node {
            name {
              id
              nameText {
                text
              }
              canonicalUrl
            }
          }
        }
      }
      Writers: credits(first: 5, filter: { categories: "writer" }) {
        edges {
          node {
            name {
              id
              nameText {
                text
              }
              canonicalUrl
            }
          }
        }
      }
      Stars: credits(first: 4, filter: { categories: ["actor", "actress"] }) {
        edges {
          node {
            name {
              id
              nameText {
                text
              }
              canonicalUrl
            }
          }
        }
      }
      credits(first: 200) {
        edges {
          node {
            name {
              id
              nameText {
                text
              }
              canonicalUrl
            }
          }
        }
      }
      ratingsSummary {
        aggregateRating
        voteCount
      }
      releaseDate {
        year
        month
        day
      }
      runtime {
        seconds
      }
      titleGenres {
        genres {
          genre {
            displayableProperty {
              value {
                plainText
              }
            }
          }
        }
      }
      titleText {
        text
      }
      primaryImage {
        url
      }
      plots(first: 1) {
        edges {
          node {
            plotText {
              plainText
            }
          }
        }
      }
      keywords(first: 10) {
        edges {
          node {
            keyword {
              text {
                text
              }
            }
            interestScore {
              usersVoted
              usersInterested
            }
          }
        }
      }
    }
  }
`;
