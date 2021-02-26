#!/usr/bin/env node
import * as commander from 'commander';
import { createComponent } from './lib/commands';

commander.program.version('1.0.0')

let gen = commander.program.command('generate').alias('g');

gen.command('component <name> <dir>')
  .alias('c')
  .description('Create new component')
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
  .action(createComponent)

commander.program.parse(process.argv)