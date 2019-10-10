import fs from 'fs';
import path from 'path';

export function tryFindPackageRoot(startPath?: string): string | undefined {
  for (
    let dir = startPath || path.resolve('.');
    path.basename(dir) !== 'node_modules' && path.dirname(dir) !== dir;
    dir = path.dirname(dir)
  ) {
    if (fs.readdirSync(dir).indexOf('package.json') >= 0) {
      return dir;
    }
  }
}

export function findPackageRoot(startPath?: string): string {
  const ret = tryFindPackageRoot(startPath);
  if (!ret) {
    throw new Error(
      `can't find package root for path '${startPath || '<cwd>'}'`,
    );
  }
  return ret;
}
