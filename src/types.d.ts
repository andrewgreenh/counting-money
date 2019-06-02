import { SerializedStyles } from '@emotion/css';

export type ArrayOrSingle<T> = T | T[];

export type ClassNames = ArrayOrSingle<string | false | SerializedStyles | undefined | null>;
