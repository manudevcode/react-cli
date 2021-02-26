"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
exports.askOverrideDir = (componentName) => {
    return inquirer.prompt({
        type: 'list',
        name: 'overideDir',
        message: `The directory '${componentName}' exist, overwrite the content of provided directory?`,
        choices: ['Yes', 'No'],
    });
};
//# sourceMappingURL=index.js.map