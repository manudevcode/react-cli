"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const chalk = require("chalk");
const replace = require("replace");
const utils_1 = require("../utils");
const templates = require("../templates");
const inquires_1 = require("../inquires");
const files_1 = require("../files");
exports.createComponent = async (name, dir, args) => {
    let componentPath = `${dir}/${name}`;
    if (!files_1.directoryExists(`${dir}`)) {
        files_1.createDir(`${dir}`);
    }
    if (files_1.directoryExists(componentPath)) {
        var { overideDir } = await inquires_1.askOverrideDir(componentPath);
        if (overideDir === 'Yes') {
            createFile(componentPath, name, args);
        }
        else {
            utils_1.Log(chalk.red('Operation aborted'));
        }
    }
    else {
        createFile(componentPath, name, args);
    }
};
const buildAdditionalImports = (args) => {
    let imports = '';
    for (const key in args) {
        if (Object.prototype.hasOwnProperty.call(args, key)) {
            imports = imports.concat(`${templates.imports[key]},`);
        }
    }
    return imports;
};
const buildDeclarations = (args) => {
    let declarations = '';
    for (const key in args) {
        if (Object.prototype.hasOwnProperty.call(args, key)) {
            declarations = declarations.concat(`${templates.declarations[key]}\n`);
        }
    }
    return declarations;
};
const createFile = (componentPath, name, args) => {
    const { style, typscript, functional, test } = args, restArgs = __rest(args, ["style", "typscript", "functional", "test"]);
    console.log('Log at 👉 ~ file: index.ts ~ line 52 ~ createFile ~ args', args);
    const ext = typscript ? 'tsx' : 'jsx';
    const filePath = `${componentPath}/index.${ext}`;
    const stylesPath = `${componentPath}/index.scss`;
    if (style) {
        if (!fs.existsSync(`stylesPath`)) {
            console.log(chalk.yellow('CREATING STYLES FILE:', `${files_1.getCurrentDirectoryBase()}/${stylesPath}`));
            fs.outputFile(`${stylesPath}`, templates.styleClass, (err) => {
                if (err)
                    throw err;
                replace({
                    regex: ":ComponentName",
                    replacement: name,
                    paths: [stylesPath],
                    recursive: false,
                    silent: true,
                });
                console.log(chalk.green('CREATED STYLES FILE:', `${files_1.getCurrentDirectoryBase()}/${stylesPath}`));
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
    fs.outputFile(filePath, template, (err) => {
        if (err)
            throw err;
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
        console.log(chalk.green('CREATED COMPONENT:', `${files_1.getCurrentDirectoryBase()}/${componentPath}/index.${ext}`));
    });
    if (test) {
        console.log(chalk.blue('CREATING COMPONENT TEST FILE:', `${files_1.getCurrentDirectoryBase()}/${componentPath}/index.test.${ext}`));
        let templateTest = templates.testComponent;
        let testFilePath = `${componentPath}/index.test.${ext}`;
        fs.outputFile(testFilePath, templateTest, (err) => {
            if (err)
                throw err;
            replace({
                regex: ":ComponentName",
                replacement: name,
                paths: [testFilePath],
                recursive: false,
                silent: true,
            });
            console.log(chalk.green('CREATED OMPONENT TEST FILE:', `${files_1.getCurrentDirectoryBase()}/${componentPath}/index.${ext}`));
        });
    }
};
//# sourceMappingURL=index.js.map