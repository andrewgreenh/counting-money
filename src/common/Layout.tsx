import styled from './styles/styled';

export const headerHeight = 60;
export const Header = styled.header`
  height: ${headerHeight}px;
  background: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.accentNegative};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const footerHeight = 60;
export const Footer = styled.footer`
  height: ${footerHeight}px;
  background: ${p => p.theme.colors.layerOnMainBackground};
  color: ${p => p.theme.colors.layerOnMainBackgroundNegative};
  position: sticky;
  bottom: 0;
`;

export const Main = styled.main`
  min-height: calc(100vh - ${headerHeight}px - ${footerHeight}px);
  overflow: hidden;
`;
