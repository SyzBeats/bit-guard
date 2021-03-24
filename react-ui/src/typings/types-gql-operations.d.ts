import { Maybe } from 'graphql/jsutils/Maybe';
import { AuthPayload, Exact, Link, Message, User } from './types-gql';

export type DeleteMessageMutationVariables = Exact<{ [key: string]: never }>;

export type DeleteMessageMutation = { __typename?: 'Mutation' } & {
  deleteMessage?: Maybe<{ __typename?: 'Message' } & Pick<Message, 'id'>>;
};

export type CreateMessageMutationVariables = Exact<{ [key: string]: never }>;

export type CreateMessageMutation = { __typename?: 'Mutation' } & {
  createMessage: { __typename?: 'Message' } & Pick<Message, 'id' | 'content'>;
};

export type CreateLinkMutationVariables = Exact<{ [key: string]: never }>;

export type CreateLinkMutation = { __typename?: 'Mutation' } & {
  createLink: { __typename?: 'Link' } & Pick<Link, 'content'>;
};

export type DeleteLinkMutationVariables = Exact<{ [key: string]: never }>;

export type DeleteLinkMutation = { __typename?: 'Mutation' } & {
  deleteLink?: Maybe<
    { __typename?: 'Link' } & Pick<Link, 'content' | 'expiry'>
  >;
};

export type MessageByIdQueryVariables = Exact<{ [key: string]: never }>;

export type MessageByIdQuery = { __typename?: 'Query' } & {
  messageById?: Maybe<{ __typename?: 'Message' } & Pick<Message, 'content'>>;
};

export type MessagesByUserQueryVariables = Exact<{ [key: string]: never }>;

export type MessagesByUserQuery = { __typename?: 'Query' } & {
  messagesByUser: Array<
    { __typename?: 'Message' } & Pick<Message, 'id' | 'content'> & {
        links?: Maybe<Array<{ __typename?: 'Link' } & Pick<Link, 'content'>>>;
      }
  >;
};

export type LoginUserQueryVariables = Exact<{ [key: string]: never }>;

export type LoginUserQuery = { __typename?: 'Query' } & {
  loginUser: { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'>;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = { __typename?: 'Query' } & {
  currentUser: { __typename?: 'User' } & Pick<User, 'id' | 'name'> & {
      messages?: Maybe<
        Array<
          { __typename?: 'Message' } & Pick<Message, 'id' | 'content'> & {
              links?: Maybe<
                Array<{ __typename?: 'Link' } & Pick<Link, 'content'>>
              >;
            }
        >
      >;
    };
};
