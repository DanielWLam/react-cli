#!/usr/bin/env node
const path = require('path')
const ora = require('ora')
const shell = require('shelljs')

function clone (dir) {
  return new Promise((resolve, reject) => {
    const spinner = ora('Downloading template from https://github.com/DanielWLam/react-cli-template').start()
    const name = 'react-cli-template'
    const url = 'https://github.com/DanielWLam/react-cli-template'
    const branch = 'master'
    shell.rm('-rf', dir)
    shell.exec(`git clone ${url} -b ${branch} --single-branch ${dir}`, {
      silent: true
    }, (code, stdout, stderr) => {
      if (code === 0) {
        shell.rm('-rf', path.join(dir, '.git'))
        spinner.succeed('Download template successed')
        resolve()
      } else {
        shell.rm('-rf', dir)
        spinner.fail('Download template fail with reason: ', stderr)
        reject()
      }
    })
  })
}

module.exports = function (dir = './') {
  // console.log(dir)
  // console.log('init++++++++++')
  try {
    clone(dir)
  } catch (e) {
    console.log(e)
  }
}
