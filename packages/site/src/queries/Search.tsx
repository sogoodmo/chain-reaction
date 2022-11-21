import { makeQuery } from '@/utils/graphqlQuery';

import type { Search, SearchVariables } from '../__generated__/Search';
import { searchQuery } from './searchQuery';

export const makeSearchQuery = async (searchTerm: string): Promise<Search> => {
  return makeQuery<Search, SearchVariables>(searchQuery, {
    searchTerm,
  });
};
