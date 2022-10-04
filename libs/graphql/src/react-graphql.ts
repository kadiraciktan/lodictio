import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export class Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export class Mutation {
  __typename?: 'Mutation';
  /** This Method Change the name of the user */
  changeName: Scalars['String'];
};


export class MutationChangeNameArgs {
  name: Scalars['String'];
};

export class Query {
  __typename?: 'Query';
  meet: Scalars['String'];
  sayHello: Scalars['String'];
};


export class QueryMeetArgs {
  name: Scalars['String'];
};


export class QuerySayHelloArgs {
  name: Scalars['String'];
};
