import { getModulePath } from '../getModulePath';

export const source = getModulePath(__filename);

export function theHandler(): void {
  console.log('hello world');
}
