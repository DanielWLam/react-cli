#!/usr/bin/env node
const init = require('./dwl-react-cli-init')
const path = require('path')
const program = require('commander')

function resolve (dir) {
  return path.resolve(process.cwd(), dir)
}

program
  .version(require('../package').version)
  .command('init <dir>')
  .description('init with dwl-react-cli in simple demo')
  .action(function (dir) {
    init(resolve(dir))
  })
  program.parse(process.argv)


  // .command('init <dir>', 'init with dwl-react-cli in simple demo')
  // .action(function (dir) {
  //   console.log(dir, '==')
  //   init(resolve(dir))
  // })
    // .command('rmdir <dir> [otherDirs...]')
  // .action(function (dir, otherDirs) {
  //   console.log('rmdir %s', dir);
  //   // if (otherDirs) {
  //   //   otherDirs.forEach(function (oDir) {
  //   //     console.log('rmdir %s', oDir);
  //   //   });
  //   // }
  // });