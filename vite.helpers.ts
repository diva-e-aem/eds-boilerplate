import { parse, resolve } from 'path';
import { existsSync, readdirSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { config } from './config';

const getEntry = (baseDir: string, name: string, fileType: string): string | null => {
  const filePath = resolve(__dirname, `${baseDir}/${name}.${fileType}`);
  return existsSync(filePath) ? filePath : null;
};
export const generateFileEntries = (baseDir: string, fileType: string) => {
  const entries: Record<string, string> = {};
  const names = getNamesFromFolder(baseDir);

  names.forEach((name) => {
    const entry = getEntry(baseDir, name, fileType);
    if (entry) {
      entries[name] = entry;
    }
  });
  return entries;
};

const getNamesFromFolder = (baseDir: string): string[] => {
  const pathToFolder = resolve(__dirname, baseDir);

  try {
    const names = readdirSync(pathToFolder);
    return names;
  } catch (error) {
    console.error(`Error reading directory ${pathToFolder}:`, error);
    return [];
  }
};

export const generateIconNameType = () => {
  try {
    const { iconsDirPath, iconsTypesPath } = config;
    const iconFiles = readdirSync(iconsDirPath).filter((file) => file.endsWith('.svg'));

    const icons = iconFiles.map((file) => parse(file).name.replace(/[^a-zA-Z0-9-]/g, ''));
    const typeComment = `/*
    * DO NOT EDIT THIS FILE DIRECTLY.
    * This file is auto-generated by the vite.helpers.ts script.
    */`;
    const typeDefinition = `${typeComment}
    export type IconName = '${icons.join("'  | \n'")}';\n`;

    writeFileSync(iconsTypesPath, typeDefinition);

    const prettierConfigPath = './.prettierrc';
    execSync(`npx prettier --write ${iconsTypesPath} --config ${prettierConfigPath}`);

    console.log('Icon type definitions generated and formatted successfully.');
  } catch (error) {
    console.error('Error generating and formatting icon type definitions:', error);
  }
};
