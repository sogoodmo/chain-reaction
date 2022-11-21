/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Search
// ====================================================

export interface Search_mainSearch_edges_node_entity_Keyword {
  __typename: "Keyword" | "Name";
}

export interface Search_mainSearch_edges_node_entity_Title {
  __typename: "Title";
  id: string;
}

export type Search_mainSearch_edges_node_entity = Search_mainSearch_edges_node_entity_Keyword | Search_mainSearch_edges_node_entity_Title;

export interface Search_mainSearch_edges_node {
  __typename: "MainSearchNode";
  entity: Search_mainSearch_edges_node_entity;
}

export interface Search_mainSearch_edges {
  __typename: "MainSearchEdge";
  node: Search_mainSearch_edges_node;
}

export interface Search_mainSearch {
  __typename: "MainSearchConnection";
  edges: Search_mainSearch_edges[];
}

export interface Search {
  mainSearch: Search_mainSearch | null;
}

export interface SearchVariables {
  searchTerm: string;
}
