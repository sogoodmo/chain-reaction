/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetName
// ====================================================

export interface GetName_name_nameText {
  __typename: "NameText";
  text: string;
}

export interface GetName_name_akas_edges_node {
  __typename: "NameAka";
  text: string;
}

export interface GetName_name_akas_edges {
  __typename: "NameAkaEdge";
  node: GetName_name_akas_edges_node;
}

export interface GetName_name_akas {
  __typename: "NameAkaConnection";
  edges: GetName_name_akas_edges[];
}

export interface GetName_name_credits_edges_node_title_titleText {
  __typename: "TitleText";
  text: string;
}

export interface GetName_name_credits_edges_node_title_primaryImage {
  __typename: "Image";
  url: string | null;
}

export interface GetName_name_credits_edges_node_title {
  __typename: "Title";
  id: string;
  titleText: GetName_name_credits_edges_node_title_titleText | null;
  canonicalUrl: string | null;
  primaryImage: GetName_name_credits_edges_node_title_primaryImage | null;
}

export interface GetName_name_credits_edges_node {
  __typename: "Cast" | "Crew";
  title: GetName_name_credits_edges_node_title;
}

export interface GetName_name_credits_edges {
  __typename: "CreditEdge";
  node: GetName_name_credits_edges_node;
}

export interface GetName_name_credits {
  __typename: "NameCreditConnection";
  edges: GetName_name_credits_edges[];
  total: number;
}

export interface GetName_name_awardNominations_edges_node_award_event {
  __typename: "AwardsEvent";
  text: string;
}

export interface GetName_name_awardNominations_edges_node_award_category {
  __typename: "AwardCategory";
  text: string | null;
}

export interface GetName_name_awardNominations_edges_node_award {
  __typename: "AwardDetails";
  text: string;
  event: GetName_name_awardNominations_edges_node_award_event;
  year: number;
  category: GetName_name_awardNominations_edges_node_award_category | null;
}

export interface GetName_name_awardNominations_edges_node {
  __typename: "AwardNomination";
  award: GetName_name_awardNominations_edges_node_award;
  isWinner: boolean;
}

export interface GetName_name_awardNominations_edges {
  __typename: "AwardNominationEdge";
  node: GetName_name_awardNominations_edges_node;
}

export interface GetName_name_awardNominations {
  __typename: "AwardNominationConnection";
  edges: GetName_name_awardNominations_edges[];
}

export interface GetName_name_knownFor_edges_node_title_titleText {
  __typename: "TitleText";
  text: string;
}

export interface GetName_name_knownFor_edges_node_title_primaryImage {
  __typename: "Image";
  url: string | null;
}

export interface GetName_name_knownFor_edges_node_title {
  __typename: "Title";
  id: string;
  titleText: GetName_name_knownFor_edges_node_title_titleText | null;
  canonicalUrl: string | null;
  primaryImage: GetName_name_knownFor_edges_node_title_primaryImage | null;
}

export interface GetName_name_knownFor_edges_node_summary_principalCategory {
  __typename: "CreditCategory";
  text: string;
}

export interface GetName_name_knownFor_edges_node_summary_principalCharacters {
  __typename: "Character";
  name: string;
}

export interface GetName_name_knownFor_edges_node_summary {
  __typename: "NameKnownForSummary";
  principalCategory: GetName_name_knownFor_edges_node_summary_principalCategory;
  principalCharacters: GetName_name_knownFor_edges_node_summary_principalCharacters[] | null;
}

export interface GetName_name_knownFor_edges_node {
  __typename: "NameKnownFor";
  title: GetName_name_knownFor_edges_node_title;
  summary: GetName_name_knownFor_edges_node_summary;
}

export interface GetName_name_knownFor_edges {
  __typename: "NameKnownForEdge";
  node: GetName_name_knownFor_edges_node;
}

export interface GetName_name_knownFor {
  __typename: "NameKnownForConnection";
  edges: GetName_name_knownFor_edges[];
  total: number;
}

export interface GetName_name {
  __typename: "Name";
  canonicalUrl: string | null;
  id: string;
  nameText: GetName_name_nameText | null;
  akas: GetName_name_akas | null;
  credits: GetName_name_credits | null;
  awardNominations: GetName_name_awardNominations | null;
  knownFor: GetName_name_knownFor | null;
}

export interface GetName {
  name: GetName_name | null;
}

export interface GetNameVariables {
  id: string;
}
