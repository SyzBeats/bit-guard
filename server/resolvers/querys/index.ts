import { MessageQuery } from '../message';
import { UserQuery } from '../user';
import { LinkQuery } from '../link';

const Query = {
  ...MessageQuery,
  ...UserQuery,
  ...LinkQuery,
};

export { Query };
