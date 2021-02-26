import * as inquirer from 'inquirer';

export const askOverrideDir = (componentName: string) => {  
  return inquirer.prompt({
    type: 'list',
    name: 'overideDir',
    message: `The directory '${componentName}' exist, overwrite the content of provided directory?`,
    choices: ['Yes', 'No'],
  });
}