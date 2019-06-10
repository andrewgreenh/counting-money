import styled from './styles/styled';

export const Page = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${p => p.theme.colors.mainBackground};
  z-index: 1;
`;
