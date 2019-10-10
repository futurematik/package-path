import fs from 'fs';
import path from 'path';
import { tryFindPackageRoot } from './findPackageRoot';

export interface ModulePath {
  root: string;
  path: string;
}

export function tryGetModulePath(filepath: string): ModulePath | undefined {
  const st = fs.statSync(filepath);

  const root = tryFindPackageRoot(
    st.isDirectory() ? filepath : path.dirname(filepath),
  );
  if (!root) {
    return;
  }

  return {
    root,
    path: path.relative(root, filepath),
  };
}

export function getModulePath(filepath: string): ModulePath {
  const ret = tryGetModulePath(filepath);
  if (!ret) {
    throw new Error(`can't find module path for path '${filepath}'`);
  }
  return ret;
}
