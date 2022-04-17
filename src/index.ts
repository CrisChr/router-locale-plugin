import {IApi} from '@umijs/types';
import ejs from 'ejs';
import {join} from 'path';
import {readFileSync} from 'fs';

const DIR_NAME = 'plugin-router-locale';

export default (api: IApi) => {
  if(api.userConfig.routes) return;

  api.describe({
    key: 'routerLocale',
    config: {
      schema(joi) {
        return joi.object({
          alias: joi.object()
        })
      }
    }
  });

  api.onGenerateFiles({
    fn: ({files}) => {
      const {routerLocale} = api.userConfig;
      const locale_template = readFileSync(join(__dirname, '../template/locale_template.ts'), 'utf-8');
      api.writeTmpFile({
        path: `${DIR_NAME}/url_locale.ts`,
        content: ejs.render(locale_template.toString(), {
          alias: JSON.stringify(routerLocale.alias),
        })
      })
    }
  });

  api.addRuntimePlugin(() => join(api.paths.absTmpPath!, `${DIR_NAME}/url_locale.ts`));
}