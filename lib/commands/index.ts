import * as fs from 'fs-extra';
import * as chalk from 'chalk';
import * as replace from 'replace';
import { Args, Log } from '../utils';
import * as templates from '../templates';
import { askOverrideDir } from '../inquires';
import { directoryExists, createDir, getCurrentDirectoryBase } from "../files";

export const createComponent = async (name: string, dir: string, args: Args) => {
  let componentPath = `${dir}/${name}`;
  
  if (!directoryExists(`${dir}`)) {
    createDir(`${dir}`);
  }

  if (directoryExists(componentPath)) {
    var { overideDir } = await askOverrideDir(componentPath);
    if (overideDir === 'Yes') {    
      createFile(componentPath, name, args);
    } else {
      Log(chalk.red('Operation aborted'));
    }
  } else {
    createFile(componentPath, name, args);
  }
}

const buildAdditionalImports = (args: any) => {
  let imports = '';
  for (const key in args) {
    if (Object.prototype.hasOwnProperty.call(args, key)) {
      imports = imports.concat(`${templates.imports[key]},`);
    }
  }

  return imports;
}

const buildDeclarations = (args: any) => {
  let declarations = '';
  for (const key in args) {
    if (Object.prototype.hasOwnProperty.call(args, key)) {
      declarations = declarations.concat(`${templates.declarations[key]}\n`);
    }
  }

  return declarations;
}

const createFile = (componentPath: string, name: string, args: Args) => {
  const { style, typscript, functional, test, ...restArgs } = args;
  console.log('Log at 👉 ~ file: index.ts ~ line 52 ~ createFile ~ args', args);
  const ext = typscript ? 'tsx' : 'jsx';
  const filePath = `${componentPath}/index.${ext}`;
  const stylesPath = `${componentPath}/index.scss`;
  
  if ( style) {
    if (!fs.existsSync(`stylesPath`)) {
      console.log(chalk.yellow('CREATING STYLES FILE:', `${getCurrentDirectoryBase()}/${stylesPath}`));
      fs.outputFile(`${stylesPath}`, templates.styleClass, (err: any) => {
        if (err) throw err;
        replace({
          regex: ":ComponentName",
          replacement: name,
          paths: [stylesPath],
          recursive: false,
          silent: true,
        });
        console.log(chalk.green('CREATED STYLES FILE:', `${getCurrentDirectoryBase()}/${stylesPath}`));
      });
      
    }
  }

  let imports = [templates.imports.react, templates.imports.propTypes];
  
  if (style) {
    imports.push(templates.imports.styles);
  }

  const additionalImports = buildAdditionalImports(restArgs);
  const declarations = buildDeclarations(restArgs);

  let additionalImportsString = functional ? `, { ${additionalImports} }` : '';
  let declarationsString = functional ? `${declarations}` : '';
  
  let body = functional ? [templates.functionalComponent] : [templates.classComponent].join('\n');
  let template = imports.join('\n') + '\n' + body + '\n';
  
  fs.outputFile(filePath, template, (err: any) => {
    if (err) throw err;
    replace({
      regex: ":ComponentName",
      replacement: name,
      paths: [filePath],
      recursive: false,
      silent: true,
    });

    replace({      
      regex: ":AdditionalImports",
      replacement: additionalImportsString,
      paths: [filePath],
      recursive: false,
      silent: true,
    });

    replace({
      regex: ":Declarations",
      replacement: declarationsString,
      paths: [filePath],
      recursive: false,
      silent: true,
    });
    console.log(chalk.green('CREATED COMPONENT:', `${getCurrentDirectoryBase()}/${componentPath}/index.${ext}`));    
  });


  if (test) {
    // Create test file 
    console.log(chalk.blue('CREATING COMPONENT TEST FILE:', `${getCurrentDirectoryBase()}/${componentPath}/index.test.${ext}`));
    let templateTest = templates.testComponent;
    let testFilePath = `${componentPath}/index.test.${ext}`;
    fs.outputFile(testFilePath, templateTest, (err: any) => {
      if (err) throw err;
      replace({
        regex: ":ComponentName",
        replacement: name,
        paths: [testFilePath],
        recursive: false,
        silent: true,
      });
      console.log(chalk.green('CREATED OMPONENT TEST FILE:', `${getCurrentDirectoryBase()}/${componentPath}/index.${ext}`));    
    });
  }
}