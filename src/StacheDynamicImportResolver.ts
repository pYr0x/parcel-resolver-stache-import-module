import {Resolver} from '@parcel/plugin';
import path from 'path';

export default new Resolver({
  async resolve({specifier}) {
    if (specifier === 'parcel-stache-import-module') {
      return {
        filePath: path.join(__dirname, 'dummys.js'),
        // language=JavaScript
        code: `
          import {flushLoader, addLoader} from 'can-import-module';
          import viewCallbacks from 'can-view-callbacks';
          debugger;
          flushLoader();

          const tag = viewCallbacks.tag;

          // noop static import since we handled it in the vite:stache plugin
          tag('can-import', function () {});

          export default function (dynamicImportMap) {};`
      };
    }
    return null;
  }
});
