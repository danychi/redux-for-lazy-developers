import { path } from 'ramda';

export const makeSelectRouteParams = () => (state, props) => (props ? path(['match', 'params'], props) : {});
