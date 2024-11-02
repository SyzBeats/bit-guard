import { UserMutation } from '../user';
import { LinkMutation } from '../link';
import { SecretMutation } from '../secret';

const Mutation = {
	...UserMutation,
	...LinkMutation,
	...SecretMutation,
};

export { Mutation };
