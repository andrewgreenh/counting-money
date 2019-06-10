import { useContext } from 'react';
import { RouteComponentProps, __RouterContext } from 'react-router';

// The react-router guys say that this will be what the official API probably looks like
// https://github.com/ReactTraining/react-router/pull/6453#issuecomment-474600561

export const useLocation = () => {
  const context = useContext(__RouterContext);
  return context.location;
};

export function useMatch<ParameterType = {}>() {
  const context = useContext(__RouterContext) as RouteComponentProps<ParameterType>;
  return context.match;
}

export function useParams<ParameterType = {}>() {
  const context = useContext(__RouterContext) as RouteComponentProps<ParameterType>;
  return context.match.params;
}
