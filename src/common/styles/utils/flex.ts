import css from '@emotion/css';

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexInline = css`
  display: inline-flex;
`;

export const flexFixedChild = css`
  flex: 0 0 auto;
`;

export const flexFillChild = css`
  flex: 1 1 auto;
  height: 100%;
`;

export const flexCenteredChildren = css`
  justify-content: center;
  align-items: center;
`;
