import 'jest';
import path from 'path';
import { tryFindPackageRoot } from './findPackageRoot';

describe('findPackageRoot', () => {
  it('returns the path containing package.json', () => {
    const root = tryFindPackageRoot(__dirname);
    expect(root).toEqual(path.resolve(__dirname, '../'));
  });
});
