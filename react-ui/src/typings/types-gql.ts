import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  user?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  search: Array<SearchResult>;
  myChats: Array<Chat>;
  messagesByUser: Array<Message>;
  messageById?: Maybe<Message>;
  loginUser: AuthPayload;
  currentUser: User;
  linkByMessage: Array<Link>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QuerySearchArgs = {
  term: Scalars['String'];
};

export type QueryMessageByIdArgs = {
  data: MessageWhereUniqueInput;
};

export type QueryLoginUserArgs = {
  data: UserLoginInput;
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN',
}

export type Node = {
  id: Scalars['ID'];
};

export type SearchResult = User | Chat | ChatMessage;

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  role: Role;
  name?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Message>>;
};

export type Chat = Node & {
  __typename?: 'Chat';
  id: Scalars['ID'];
  users: Array<User>;
  messages: Array<ChatMessage>;
};

export type ChatMessage = Node & {
  __typename?: 'ChatMessage';
  id: Scalars['ID'];
  content: Scalars['String'];
  time: Scalars['Date'];
  user: User;
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
  deleteLink?: Maybe<{ __typename?: 'Link' } & Pick<Link, 'content'>>;
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

export const DeleteMessageDocument = gql`
  mutation DeleteMessage {
    deleteMessage(data: { id: "0f488a5e-caa3-4e2d-ab54-70e220ffc529" }) {
      id
    }
  }
`;
export type DeleteMessageMutationFn = Apollo.MutationFunction<
  DeleteMessageMutation,
  DeleteMessageMutationVariables
>;

/**
 * __useDeleteMessageMutation__
 *
 * To run a mutation, you first call `useDeleteMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMessageMutation, { data, loading, error }] = useDeleteMessageMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMessageMutation,
    DeleteMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteMessageMutation,
    DeleteMessageMutationVariables
  >(DeleteMessageDocument, options);
}
export type DeleteMessageMutationHookResult = ReturnType<
  typeof useDeleteMessageMutation
>;
export type DeleteMessageMutationResult = Apollo.MutationResult<DeleteMessageMutation>;
export type DeleteMessageMutationOptions = Apollo.BaseMutationOptions<
  DeleteMessageMutation,
  DeleteMessageMutationVariables
>;
export const CreateMessageDocument = gql`
  mutation CreateMessage {
    createMessage(
      data: {
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "
      }
    ) {
      id
      content
    }
  }
`;
export type CreateMessageMutationFn = Apollo.MutationFunction<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >(CreateMessageDocument, options);
}
export type CreateMessageMutationHookResult = ReturnType<
  typeof useCreateMessageMutation
>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;
export const CreateLinkDocument = gql`
  mutation CreateLink {
    createLink(data: { messageId: "baf84a69-0e97-401b-8461-d274bb40048a" }) {
      content
    }
  }
`;
export type CreateLinkMutationFn = Apollo.MutationFunction<
  CreateLinkMutation,
  CreateLinkMutationVariables
>;

/**
 * __useCreateLinkMutation__
 *
 * To run a mutation, you first call `useCreateLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLinkMutation, { data, loading, error }] = useCreateLinkMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLinkMutation,
    CreateLinkMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateLinkMutation, CreateLinkMutationVariables>(
    CreateLinkDocument,
    options,
  );
}
export type CreateLinkMutationHookResult = ReturnType<
  typeof useCreateLinkMutation
>;
export type CreateLinkMutationResult = Apollo.MutationResult<CreateLinkMutation>;
export type CreateLinkMutationOptions = Apollo.BaseMutationOptions<
  CreateLinkMutation,
  CreateLinkMutationVariables
>;
export const DeleteLinkDocument = gql`
  mutation DeleteLink {
    deleteLink(data: { id: "ceecd225-7d79-425a-8b9c-61983020fe23" }) {
      content
    }
  }
`;
export type DeleteLinkMutationFn = Apollo.MutationFunction<
  DeleteLinkMutation,
  DeleteLinkMutationVariables
>;

/**
 * __useDeleteLinkMutation__
 *
 * To run a mutation, you first call `useDeleteLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLinkMutation, { data, loading, error }] = useDeleteLinkMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteLinkMutation,
    DeleteLinkMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteLinkMutation, DeleteLinkMutationVariables>(
    DeleteLinkDocument,
    options,
  );
}
export type DeleteLinkMutationHookResult = ReturnType<
  typeof useDeleteLinkMutation
>;
export type DeleteLinkMutationResult = Apollo.MutationResult<DeleteLinkMutation>;
export type DeleteLinkMutationOptions = Apollo.BaseMutationOptions<
  DeleteLinkMutation,
  DeleteLinkMutationVariables
>;
export const MessageByIdDocument = gql`
  query MessageById {
    messageById(data: { id: "49ae07a9-d5a9-4814-ab31-182233cd17fa" }) {
      content
    }
  }
`;

/**
 * __useMessageByIdQuery__
 *
 * To run a query within a React component, call `useMessageByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessageByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageByIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useMessageByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MessageByIdQuery,
    MessageByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MessageByIdQuery, MessageByIdQueryVariables>(
    MessageByIdDocument,
    options,
  );
}
export function useMessageByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MessageByIdQuery,
    MessageByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MessageByIdQuery, MessageByIdQueryVariables>(
    MessageByIdDocument,
    options,
  );
}
export type MessageByIdQueryHookResult = ReturnType<typeof useMessageByIdQuery>;
export type MessageByIdLazyQueryHookResult = ReturnType<
  typeof useMessageByIdLazyQuery
>;
export type MessageByIdQueryResult = Apollo.QueryResult<
  MessageByIdQuery,
  MessageByIdQueryVariables
>;
export const MessagesByUserDocument = gql`
  query MessagesByUser {
    messagesByUser {
      id
      content
      links {
        content
      }
    }
  }
`;

/**
 * __useMessagesByUserQuery__
 *
 * To run a query within a React component, call `useMessagesByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useMessagesByUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MessagesByUserQuery,
    MessagesByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MessagesByUserQuery, MessagesByUserQueryVariables>(
    MessagesByUserDocument,
    options,
  );
}
export function useMessagesByUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MessagesByUserQuery,
    MessagesByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MessagesByUserQuery, MessagesByUserQueryVariables>(
    MessagesByUserDocument,
    options,
  );
}
export type MessagesByUserQueryHookResult = ReturnType<
  typeof useMessagesByUserQuery
>;
export type MessagesByUserLazyQueryHookResult = ReturnType<
  typeof useMessagesByUserLazyQuery
>;
export type MessagesByUserQueryResult = Apollo.QueryResult<
  MessagesByUserQuery,
  MessagesByUserQueryVariables
>;
export const LoginUserDocument = gql`
  query LoginUser {
    loginUser(data: { email: "simeon@web.de", password: "123456789" }) {
      token
    }
  }
`;

/**
 * __useLoginUserQuery__
 *
 * To run a query within a React component, call `useLoginUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LoginUserQuery,
    LoginUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoginUserQuery, LoginUserQueryVariables>(
    LoginUserDocument,
    options,
  );
}
export function useLoginUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoginUserQuery,
    LoginUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoginUserQuery, LoginUserQueryVariables>(
    LoginUserDocument,
    options,
  );
}
export type LoginUserQueryHookResult = ReturnType<typeof useLoginUserQuery>;
export type LoginUserLazyQueryHookResult = ReturnType<
  typeof useLoginUserLazyQuery
>;
export type LoginUserQueryResult = Apollo.QueryResult<
  LoginUserQuery,
  LoginUserQueryVariables
>;
export const CurrentUserDocument = gql`
  query CurrentUser {
    currentUser {
      id
      name
      messages {
        id
        content
        links {
          content
        }
      }
    }
  }
`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options,
  );
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options,
  );
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<
  typeof useCurrentUserLazyQuery
>;
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>;
