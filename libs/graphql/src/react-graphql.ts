import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** This Method Change the name of the user */
  changeName: Scalars['String'];
};


export type MutationChangeNameArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  meet: Scalars['String'];
  sayHello: Scalars['String'];
};


export type QueryMeetArgs = {
  name: Scalars['String'];
};


export type QuerySayHelloArgs = {
  name: Scalars['String'];
};

export type Meet_QueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type Meet_Query = { __typename?: 'Query', meet: string };

export type SayHello_QueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SayHello_Query = { __typename?: 'Query', sayHello: string };

export type ChangeName_MutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type ChangeName_Mutation = { __typename?: 'Mutation', changeName: string };


export const Meet_QueryDocument = gql`
    query meet_query($name: String!) {
  meet(name: $name)
}
    `;

/**
 * __useMeet_QueryQuery__
 *
 * To run a query within a React component, call `useMeet_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeet_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeet_QueryQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useMeet_QueryQuery(baseOptions: Apollo.QueryHookOptions<Meet_Query, Meet_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Meet_Query, Meet_QueryVariables>(Meet_QueryDocument, options);
      }
export function useMeet_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Meet_Query, Meet_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Meet_Query, Meet_QueryVariables>(Meet_QueryDocument, options);
        }
export type Meet_QueryQueryHookResult = ReturnType<typeof useMeet_QueryQuery>;
export type Meet_QueryLazyQueryHookResult = ReturnType<typeof useMeet_QueryLazyQuery>;
export type Meet_QueryQueryResult = Apollo.QueryResult<Meet_Query, Meet_QueryVariables>;
export const SayHello_QueryDocument = gql`
    query sayHello_query($name: String!) {
  sayHello(name: $name)
}
    `;

/**
 * __useSayHello_QueryQuery__
 *
 * To run a query within a React component, call `useSayHello_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSayHello_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSayHello_QueryQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSayHello_QueryQuery(baseOptions: Apollo.QueryHookOptions<SayHello_Query, SayHello_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SayHello_Query, SayHello_QueryVariables>(SayHello_QueryDocument, options);
      }
export function useSayHello_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SayHello_Query, SayHello_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SayHello_Query, SayHello_QueryVariables>(SayHello_QueryDocument, options);
        }
export type SayHello_QueryQueryHookResult = ReturnType<typeof useSayHello_QueryQuery>;
export type SayHello_QueryLazyQueryHookResult = ReturnType<typeof useSayHello_QueryLazyQuery>;
export type SayHello_QueryQueryResult = Apollo.QueryResult<SayHello_Query, SayHello_QueryVariables>;
export const ChangeName_MutationDocument = gql`
    mutation changeName_mutation($name: String!) {
  changeName(name: $name)
}
    `;
export type ChangeName_MutationMutationFn = Apollo.MutationFunction<ChangeName_Mutation, ChangeName_MutationVariables>;

/**
 * __useChangeName_MutationMutation__
 *
 * To run a mutation, you first call `useChangeName_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeName_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeNameMutationMutation, { data, loading, error }] = useChangeName_MutationMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useChangeName_MutationMutation(baseOptions?: Apollo.MutationHookOptions<ChangeName_Mutation, ChangeName_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeName_Mutation, ChangeName_MutationVariables>(ChangeName_MutationDocument, options);
      }
export type ChangeName_MutationMutationHookResult = ReturnType<typeof useChangeName_MutationMutation>;
export type ChangeName_MutationMutationResult = Apollo.MutationResult<ChangeName_Mutation>;
export type ChangeName_MutationMutationOptions = Apollo.BaseMutationOptions<ChangeName_Mutation, ChangeName_MutationVariables>;