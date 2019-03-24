import build from 'build-route-tree';

const rawTree = {
  company: null,
  events: null,
  kyc: null,
};

const routes = build(rawTree);

export default routes;
