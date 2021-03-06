import routes from 'modules/routes';
import { tKeys } from 'services/i18n';
import { IMenuItem } from 'shared/types/common';

export const menuItems: IMenuItem[] = [
  {
    path: '/',
    title: tKeys.modules.navigation.products.getKey(),
    scrollTo: 'products',
  },
  {
    path: routes.company.getRoutePath(),
    title: tKeys.modules.navigation.company.getKey(),
  },
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
  {
    path: routes.events.getRoutePath(),
    title: tKeys.modules.navigation.events.getKey(),
  },
  {
    path: 'https://medium.com/akropolis',
    title: tKeys.modules.navigation.blog.getKey(),
    isExternal: true,
  },
];
