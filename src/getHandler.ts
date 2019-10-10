import { ModulePath } from './getModulePath';
import { replaceExt } from './replaceExt';

export interface ModuleWithSource {
  source: ModulePath;
}

export interface HandlerInfo {
  code: string;
  handler: string;
}

export function getHandler<M extends ModuleWithSource, K extends keyof M>(
  mod: M,
  key: K,
): HandlerInfo {
  const source = mod.source;

  return {
    code: source.root,
    handler: replaceExt(source.path, key as string),
  };
}
