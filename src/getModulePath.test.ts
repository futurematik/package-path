import 'jest';
import path from 'path';
import { tryGetModulePath } from './getModulePath';

describe('getModulePath', () => {
  it('returns the expected path', () => {
    const modulePath = tryGetModulePath(__filename);

    expect(modulePath).toEqual({
      root: path.resolve(__dirname, '../'),
      path: path.join(path.basename(__dirname), path.basename(__filename)),
    });
  });
});
