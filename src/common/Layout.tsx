import styled from './styles/styled';

export const headerHeight = 60;
export const Header = styled.header`
  height: ${headerHeight}px;
  background: ${p => p.theme.colors.main};
  color: ${p => p.theme.colors.mainNegative};
  position: sticky;
  top: 0;
`;

export const footerHeight = 60;
export const Footer = styled.footer`
  height: ${footerHeight}px;
  background: ${p => p.theme.colors.main};
  color: ${p => p.theme.colors.mainNegative};
  position: sticky;
  bottom: 0;
`;

export const Main = styled.main`
  min-height: calc(100vh - ${headerHeight}px - ${footerHeight}px);
`;
