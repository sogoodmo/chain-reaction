/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTitle
// ====================================================

export interface GetTitle_title_Directors_edges_node_name_nameText {
  __typename: "NameText";
  text: string;
}

export interface GetTitle_title_Directors_edges_node_name {
  __typename: "Name";
  id: string;
  nameText: GetTitle_title_Directors_edges_node_name_nameText | null;
  canonicalUrl: string | null;
}

export interface GetTitle_title_Directors_edges_node {
  __typename: "Cast" | "Crew";
  name: GetTitle_title_Directors_edges_node_name;
}

export interface GetTitle_title_Directors_edges {
  __typename: "CreditEdge";
  node: GetTitle_title_Directors_edges_node;
}

export interface GetTitle_title_Directors {
  __typename: "CreditConnection";
  edges: GetTitle_title_Directors_edges[];
}

export interface GetTitle_title_Writers_edges_node_name_nameText {
  __typename: "NameText";
  text: string;
}

export interface GetTitle_title_Writers_edges_node_name {
  __typename: "Name";
  id: string;
  nameText: GetTitle_title_Writers_edges_node_name_nameText | null;
  canonicalUrl: string | null;
}

export interface GetTitle_title_Writers_edges_node {
  __typename: "Cast" | "Crew";
  name: GetTitle_title_Writers_edges_node_name;
}

export interface GetTitle_title_Writers_edges {
  __typename: "CreditEdge";
  node: GetTitle_title_Writers_edges_node;
}

export interface GetTitle_title_Writers {
  __typename: "CreditConnection";
  edges: GetTitle_title_Writers_edges[];
}

export interface GetTitle_title_Stars_edges_node_name_nameText {
  __typename: "NameText";
  text: string;
}

export interface GetTitle_title_Stars_edges_node_name {
  __typename: "Name";
  id: string;
  nameText: GetTitle_title_Stars_edges_node_name_nameText | null;
  canonicalUrl: string | null;
}

export interface GetTitle_title_Stars_edges_node {
  __typename: "Cast" | "Crew";
  name: GetTitle_title_Stars_edges_node_name;
}

export interface GetTitle_title_Stars_edges {
  __typename: "CreditEdge";
  node: GetTitle_title_Stars_edges_node;
}

export interface GetTitle_title_Stars {
  __typename: "CreditConnection";
  edges: GetTitle_title_Stars_edges[];
}

export interface GetTitle_title_credits_edges_node_name_nameText {
  __typename: "NameText";
  text: string;
}

export interface GetTitle_title_credits_edges_node_name {
  __typename: "Name";
  id: string;
  nameText: GetTitle_title_credits_edges_node_name_nameText | null;
  canonicalUrl: string | null;
}

export interface GetTitle_title_credits_edges_node {
  __typename: "Cast" | "Crew";
  name: GetTitle_title_credits_edges_node_name;
}

export interface GetTitle_title_credits_edges {
  __typename: "CreditEdge";
  node: GetTitle_title_credits_edges_node;
}

export interface GetTitle_title_credits {
  __typename: "CreditConnection";
  edges: GetTitle_title_credits_edges[];
}

export interface GetTitle_title_ratingsSummary {
  __typename: "RatingsSummary";
  aggregateRating: number | null;
  voteCount: number;
}

export interface GetTitle_title_releaseDate {
  __typename: "ReleaseDate";
  year: number | null;
  month: number | null;
  day: number | null;
}

export interface GetTitle_title_runtime {
  __typename: "Runtime";
  seconds: number;
}

export interface GetTitle_title_titleGenres_genres_genre_displayableProperty_value {
  __typename: "Markdown";
  plainText: string | null;
}

export interface GetTitle_title_titleGenres_genres_genre_displayableProperty {
  __typename: "DisplayableTitleGenreProperty";
  value: GetTitle_title_titleGenres_genres_genre_displayableProperty_value;
}

export interface GetTitle_title_titleGenres_genres_genre {
  __typename: "GenreItem";
  displayableProperty: GetTitle_title_titleGenres_genres_genre_displayableProperty;
}

export interface GetTitle_title_titleGenres_genres {
  __typename: "TitleGenre";
  genre: GetTitle_title_titleGenres_genres_genre;
}

export interface GetTitle_title_titleGenres {
  __typename: "TitleGenres";
  genres: GetTitle_title_titleGenres_genres[];
}

export interface GetTitle_title_titleText {
  __typename: "TitleText";
  text: string;
}

export interface GetTitle_title_primaryImage {
  __typename: "Image";
  url: string | null;
}

export interface GetTitle_title_plots_edges_node_plotText {
  __typename: "Markdown";
  plainText: string | null;
}

export interface GetTitle_title_plots_edges_node {
  __typename: "Plot";
  plotText: GetTitle_title_plots_edges_node_plotText | null;
}

export interface GetTitle_title_plots_edges {
  __typename: "PlotEdge";
  node: GetTitle_title_plots_edges_node;
}

export interface GetTitle_title_plots {
  __typename: "PlotConnection";
  edges: GetTitle_title_plots_edges[];
}

export interface GetTitle_title_keywords_edges_node_keyword_text {
  __typename: "KeywordText";
  text: string;
}

export interface GetTitle_title_keywords_edges_node_keyword {
  __typename: "Keyword";
  text: GetTitle_title_keywords_edges_node_keyword_text | null;
}

export interface GetTitle_title_keywords_edges_node_interestScore {
  __typename: "InterestScore";
  usersVoted: number;
  usersInterested: number;
}

export interface GetTitle_title_keywords_edges_node {
  __typename: "TitleKeyword";
  keyword: GetTitle_title_keywords_edges_node_keyword;
  interestScore: GetTitle_title_keywords_edges_node_interestScore;
}

export interface GetTitle_title_keywords_edges {
  __typename: "TitleKeywordEdge";
  node: GetTitle_title_keywords_edges_node;
}

export interface GetTitle_title_keywords {
  __typename: "TitleKeywordConnection";
  edges: GetTitle_title_keywords_edges[];
}

export interface GetTitle_title {
  __typename: "Title";
  id: string;
  canonicalUrl: string | null;
  Directors: GetTitle_title_Directors | null;
  Writers: GetTitle_title_Writers | null;
  Stars: GetTitle_title_Stars | null;
  credits: GetTitle_title_credits | null;
  ratingsSummary: GetTitle_title_ratingsSummary | null;
  releaseDate: GetTitle_title_releaseDate | null;
  runtime: GetTitle_title_runtime | null;
  titleGenres: GetTitle_title_titleGenres | null;
  titleText: GetTitle_title_titleText | null;
  primaryImage: GetTitle_title_primaryImage | null;
  plots: GetTitle_title_plots | null;
  keywords: GetTitle_title_keywords | null;
}

export interface GetTitle {
  title: GetTitle_title | null;
}

export interface GetTitleVariables {
  id: string;
}
