
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract changeName(name: string): string | Promise<string>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract meet(name: string): string | Promise<string>;

    abstract sayHello(name: string): string | Promise<string>;
}

type Nullable<T> = T | null;
