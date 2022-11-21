import type { GetName, GetNameVariables } from '@/__generated__/GetName';
import { makeQuery } from '@/utils/graphqlQuery';

import { getNameQuery } from './getNameQuery';

export const getName = async (nameId: string): Promise<GetName> => {
  return makeQuery<GetName, GetNameVariables>(getNameQuery, { id: nameId });
};
