import { SerializedStyles } from '@emotion/css';

export type ArrayOrSingle<T> = T | T[];

export type ClassNames = ArrayOrSingle<string | false | SerializedStyles | undefined | null>;

export type ArrayItem<ArrayType extends any[]> = ArrayType extends Array<infer U> ? U : never;
