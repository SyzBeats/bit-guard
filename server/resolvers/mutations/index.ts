import { UserMutation } from '../user';
import { LinkMutation } from '../link';
import { MessageMutation } from '../message';

const Mutation = {
  ...UserMutation,
  ...LinkMutation,
  ...MessageMutation,
};

export { Mutation };
