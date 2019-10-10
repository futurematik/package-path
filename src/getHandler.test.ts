import 'jest';
import path from 'path';
import { getHandler } from './getHandler';
import * as testModule from './test-assets/testModule';

describe('getHandler', () => {
  it('returns the correct path', () => {
    const handler = getHandler(testModule, 'theHandler');

    expect(handler).toEqual({
      code: path.resolve(__dirname, '../'),
      handler: path.join(
        path.basename(__dirname),
        'test-assets/testModule.theHandler',
      ),
    });
  });
});
