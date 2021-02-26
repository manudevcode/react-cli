import * as fs from 'fs';
import * as path from 'path';

export const getCurrentDirectoryBase = (): string => {
  return path.basename(process.cwd());
}

export const directoryExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
}

export const createDir = (dirname: string) => {
  fs.mkdirSync(dirname, { recursive: true });
}