import { SecretQuery } from '../secret';
import { UserQuery } from '../user';
import { LinkQuery } from '../link';

const Query = {
  ...SecretQuery,
  ...UserQuery,
  ...LinkQuery,
};

export { Query };
