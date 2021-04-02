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
  messageId: Scalars['ID'];
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
  messageId: Scalars['ID'];
};

export type MessageCreateInput = {
  content: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
};

export type LinkCreateInput = {
  messageId: Scalars['ID'];
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

export type CreateLinkMutationVariables = Exact<{
  messageId: Scalars['ID'];
}>;

export type CreateLinkMutation = { __typename?: 'Mutation' } & {
  createLink: { __typename?: 'Link' } & Pick<Link, 'content'>;
};

export type DeleteLinkMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteLinkMutation = { __typename?: 'Mutation' } & {
  deleteLink?: Maybe<{ __typename?: 'Link' } & Pick<Link, 'content'>>;
};

export type CreateMessageMutationVariables = Exact<{
  content: Scalars['String'];
}>;

export type CreateMessageMutation = { __typename?: 'Mutation' } & {
  createMessage: { __typename?: 'Message' } & Pick<Message, 'id' | 'content'>;
};

export type DeleteMessageMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteMessageMutation = { __typename?: 'Mutation' } & {
  deleteMessage?: Maybe<{ __typename?: 'Message' } & Pick<Message, 'id'>>;
};

export type SignupUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;

export type SignupUserMutation = { __typename?: 'Mutation' } & {
  signupUser: { __typename?: 'User' } & Pick<User, 'name'>;
};

export type GetMessageByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetMessageByIdQuery = { __typename?: 'Query' } & {
  messageById?: Maybe<{ __typename?: 'Message' } & Pick<Message, 'content'>>;
};

export type GetMessageByUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetMessageByUserQuery = { __typename?: 'Query' } & {
  messagesByUser: Array<
    { __typename?: 'Message' } & Pick<Message, 'id' | 'content'> & {
        links?: Maybe<Array<{ __typename?: 'Link' } & Pick<Link, 'content'>>>;
      }
  >;
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

export const CreateLinkDocument = gql`
  mutation CreateLink($messageId: ID!) {
    createLink(data: { messageId: $messageId }) {
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
 *      messageId: // value for 'messageId'
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
  mutation DeleteLink($id: ID!) {
    deleteLink(data: { id: $id }) {
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
 *      id: // value for 'id'
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
export const CreateMessageDocument = gql`
  mutation CreateMessage($content: String!) {
    createMessage(data: { content: $content }) {
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
 *      content: // value for 'content'
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
export const DeleteMessageDocument = gql`
  mutation DeleteMessage($id: ID!) {
    deleteMessage(data: { id: $id }) {
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
 *      id: // value for 'id'
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
export const SignupUserDocument = gql`
  mutation SignupUser($email: String!, $password: String!, $name: String!) {
    signupUser(data: { email: $email, password: $password, name: $name }) {
      name
    }
  }
`;
export type SignupUserMutationFn = Apollo.MutationFunction<
  SignupUserMutation,
  SignupUserMutationVariables
>;

/**
 * __useSignupUserMutation__
 *
 * To run a mutation, you first call `useSignupUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupUserMutation, { data, loading, error }] = useSignupUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignupUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupUserMutation,
    SignupUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignupUserMutation, SignupUserMutationVariables>(
    SignupUserDocument,
    options,
  );
}
export type SignupUserMutationHookResult = ReturnType<
  typeof useSignupUserMutation
>;
export type SignupUserMutationResult = Apollo.MutationResult<SignupUserMutation>;
export type SignupUserMutationOptions = Apollo.BaseMutationOptions<
  SignupUserMutation,
  SignupUserMutationVariables
>;
export const GetMessageByIdDocument = gql`
  query GetMessageById($id: ID!) {
    messageById(data: { id: $id }) {
      content
    }
  }
`;

/**
 * __useGetMessageByIdQuery__
 *
 * To run a query within a React component, call `useGetMessageByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessageByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessageByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMessageByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMessageByIdQuery,
    GetMessageByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMessageByIdQuery, GetMessageByIdQueryVariables>(
    GetMessageByIdDocument,
    options,
  );
}
export function useGetMessageByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMessageByIdQuery,
    GetMessageByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMessageByIdQuery, GetMessageByIdQueryVariables>(
    GetMessageByIdDocument,
    options,
  );
}
export type GetMessageByIdQueryHookResult = ReturnType<
  typeof useGetMessageByIdQuery
>;
export type GetMessageByIdLazyQueryHookResult = ReturnType<
  typeof useGetMessageByIdLazyQuery
>;
export type GetMessageByIdQueryResult = Apollo.QueryResult<
  GetMessageByIdQuery,
  GetMessageByIdQueryVariables
>;
export const GetMessageByUserDocument = gql`
  query GetMessageByUser {
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
 * __useGetMessageByUserQuery__
 *
 * To run a query within a React component, call `useGetMessageByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessageByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessageByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMessageByUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMessageByUserQuery,
    GetMessageByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMessageByUserQuery, GetMessageByUserQueryVariables>(
    GetMessageByUserDocument,
    options,
  );
}
export function useGetMessageByUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMessageByUserQuery,
    GetMessageByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMessageByUserQuery,
    GetMessageByUserQueryVariables
  >(GetMessageByUserDocument, options);
}
export type GetMessageByUserQueryHookResult = ReturnType<
  typeof useGetMessageByUserQuery
>;
export type GetMessageByUserLazyQueryHookResult = ReturnType<
  typeof useGetMessageByUserLazyQuery
>;
export type GetMessageByUserQueryResult = Apollo.QueryResult<
  GetMessageByUserQuery,
  GetMessageByUserQueryVariables
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
