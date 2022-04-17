import { IRoute, IRouteProps } from '@umijs/types';
import {setLocale, getAllLocales} from 'umi';


const alias = JSON.parse('<%- alias %>');

const allLocales = getAllLocales();

export const onRouteChange = ({location, routes}: IRouteProps) => {
  if(!allLocales || !!!allLocales.length) return;
  let locale = location.pathname.split('/')[1];
  if(!locale) return;
  Object.keys(alias).forEach(key => {
    if(alias[key] === locale) {
      locale = key;
    }
  });

  if(allLocales.indexOf(locale) === -1) {
    locale = 'zh-CN';
  }
  setLocale(locale);
}

export const patchRoutes = ({routes}: IRoute) => {

  if(!allLocales || !!!allLocales.length) return routes;

  routes.forEach((route: IRoute) => {
    allLocales.forEach((locale: string) => {
      routes.unshift(Object.assign({...route}, {
        path: `/${alias[locale] || locale}${route.path}`,
      }))
    })
  });

  return routes;
}
