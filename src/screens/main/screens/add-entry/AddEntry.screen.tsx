import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Header, MainPadding } from '../../../../common/Layout';
import { Page } from '../../../../common/Page';
import { useMatch } from '../../../../common/routerHooks';
import styled from '../../../../common/styles/styled';
import { flexCenteredChildren } from '../../../../common/styles/utils/flex';
import { useCategories } from '../../../../domain/category/useCategories';

export function MainAddEntryScreen() {
  const categories = useCategories();
  const match = useMatch();
  return (
    <>
      <MainPadding />
      <Categories>
        {categories.map(c => (
          <Category key={c.name} to={{ pathname: match.url + '/amount', state: { category: c } }}>
            <FontAwesomeIcon icon={c.iconName} />
            {c.name}
          </Category>
        ))}
      </Categories>
      <Switch>
        <Route
          path={match.path + '/amount'}
          render={({ location }) => (
            <Page>
              <Header>Amount</Header>
              <MainPadding css={[flexCenteredChildren]}>
                <Input type="tel" autoFocus placeholder="0.00" />
              </MainPadding>
              <button>Add</button>
            </Page>
          )}
        />
      </Switch>
    </>
  );
}

const Category = styled(Link)`
  border-bottom: 1px solid ${p => p.theme.colors.layerOnMainBackground};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50vw;
  color: ${p => p.theme.colors.accent};
  text-decoration: none;
  font-size: 1.2em;

  svg {
    margin-bottom: 0.5em;
  }

  &:nth-of-type(2n-1) {
    border-right: 1px solid ${p => p.theme.colors.layerOnMainBackground};
  }
`;

const Categories = styled.div`
  border-top: 1px solid ${p => p.theme.colors.layerOnMainBackground};
`;

const Input = styled.input`
  background: ${p => p.theme.colors.mainBackground};
  border: 0;
  text-align: center;
  outline: none;
  font-size: 1.4em;
`;
