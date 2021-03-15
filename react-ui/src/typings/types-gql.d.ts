import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  messagesByUser: Array<Message>;
  messageById?: Maybe<Message>;
  loginUser: AuthPayload;
  currentUser: User;
  linkByMessage: Array<Link>;
};

export type QueryMessageByIdArgs = {
  data: MessageWhereUniqueInput;
};

export type QueryLoginUserArgs = {
  data: UserLoginInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  signupUser: User;
  deleteUser?: Maybe<User>;
  createMessage: Message;
  deleteMessage?: Maybe<Message>;
  createLink: Link;
  deleteLink?: Maybe<Link>;
};

export type MutationSignupUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteUserArgs = {
  data: UserWhereUniqueInput;
};

export type MutationCreateMessageArgs = {
  data?: Maybe<MessageCreateInput>;
};

export type MutationDeleteMessageArgs = {
  data: MessageWhereUniqueInput;
};

export type MutationCreateLinkArgs = {
  data: LinkCreateInput;
};

export type MutationDeleteLinkArgs = {
  data: LinkWhereUniqueInput;
};

export type Link = {
  __typename?: 'Link';
  content: Scalars['String'];
  expiry?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  content: Scalars['String'];
  links?: Maybe<Array<Link>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Message>>;
};

export type Key = {
  __typename?: 'Key';
  id: Scalars['ID'];
  key: Scalars['String'];
  messageId: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type KeyCreateInput = {
  key: Scalars['String'];
  messageId: Scalars['String'];
};

export type MessageCreateInput = {
  content: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
};

export type LinkCreateInput = {
  messageId: Scalars['String'];
  expiry?: Maybe<Scalars['String']>;
};

export type MessageWhereUniqueInput = {
  id: Scalars['ID'];
};

export type LinkWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};
