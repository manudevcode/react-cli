#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var commander = require("commander");
var commands_1 = require("./lib/commands");
commander.program.version('1.0.0');
var gen = commander.program.command('generate').alias('g');
gen.command('component <name> <dir>')
    .alias('c')
    .description('Create new component')
    .option('-S, --style', 'Create index.scss at the component folder')
    .option('-F, --functional', 'Create a functional component')
    .option('-TS, --typscript', 'Use .tsx file')
    .option('-T, --test', 'Create .test.tsx file for test')
    .option('-ust, --useState', 'Implements useState hook')
    .option('-uef, --useEffect', 'Implements useEffect hook')
    .option('-uco, --useContext', 'Implements useContext hook')
    .option('-ume, --useMemo', 'Implements useMemo hook')
    .option('-ure, --useRef', 'Implements useRef hook')
    .option('-urd, --useReducer', 'Implements useReducer hook')
    .option('-udi, --useDispatch', 'Implements useDispatch hook')
    .action(commands_1.createComponent);
commander.program.parse(process.argv);
