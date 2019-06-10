import styled from './styles/styled';
import { flexCenteredChildren, flexFillChild, flexFixedChild, flexRow } from './styles/utils/flex';
import { overflowY } from './styles/utils/misc';

export const headerHeight = 60;
export const Header = styled.header`
  height: ${headerHeight}px;
  background: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.accentNegative};
  font-size: 1.2em;
  ${flexFixedChild};
  ${flexRow};
  ${flexCenteredChildren};
`;

export const footerHeight = 60;
export const Footer = styled.footer`
  height: ${footerHeight}px;
  background: ${p => p.theme.colors.layerOnMainBackground};
  color: ${p => p.theme.colors.layerOnMainBackgroundNegative};
  ${flexFixedChild};
`;

export const Main = styled.main`
  ${flexFillChild};
  ${overflowY};
`;

export const PageHeading = styled.h1`
  text-align: center;
  font-size: 1.2em;
`;

export const MainPadding = styled.div`
  height: 40vh;
  ${flexFixedChild};
  ${flexRow};
  ${flexCenteredChildren};
`;
