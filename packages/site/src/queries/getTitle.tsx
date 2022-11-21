import { makeQuery } from '@/utils/graphqlQuery';

import type { GetTitle, GetTitleVariables } from '../__generated__/GetTitle';
import { getTitleQuery } from './getTitleQuery';

export const getTitle = async (id: string): Promise<GetTitle> => {
  return makeQuery<GetTitle, GetTitleVariables>(getTitleQuery, {
    id,
  });
};
