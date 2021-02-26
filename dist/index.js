#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const commands_1 = require("./lib/commands");
commander_1.program.version('1.0.0');
commander_1.program
    .command(' <name> <dir>')
    .option('-S, --style', 'Create index.scss at the component folder')
    .option('-F, --functional', 'Create a functional component')
    .option('-T, --typscript', 'Use .tsx extention')
    .option('-ust, --useState', 'Implements useState hook')
    .option('-uef, --useEffect', 'Implements useEffect hook')
    .option('-uco, --useContext', 'Implements useContext hook')
    .option('-ume, --useMemo', 'Implements useMemo hook')
    .option('-ure, --useRef', 'Implements useRef hook')
    .option('-urd, --useReducer', 'Implements useReducer hook')
    .option('-udi, --useDispatch', 'Implements useDispatch hook')
    .action(commands_1.createComponent)
    .parse(process.argv);
//# sourceMappingURL=index.js.map