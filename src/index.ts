#!/usr/bin/env node

/* eslint-disable no-console */
import type { LogsOptions, PackageJSON } from './types'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import boxen from 'boxen'
import chalk from 'chalk'
import { Command } from 'commander'
import figlet from 'figlet'
import gradient from 'gradient-string'

const defaultValues: Required<LogsOptions> = {
  name: 'zack-xy',
  info: ' 🎉 Hi！I\'m Zack Zheng(<zack_zhengxiyun@163.com>) 🎉 ',
}

const pkg = JSON.parse(readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')) as PackageJSON

const program = new Command()

program.name('zxylogs')
  .description('CLI to print my banner')
  .version(pkg.version)

program
  .option('-n, --name <string>, --HELP', 'display your banner name', defaultValues.name)
  .option('-i, --info <string>, ==HELP', 'display welcome information', defaultValues.info)

program.parse(process.argv)

const options = program.opts<LogsOptions>()

const title = figlet.textSync(options.name!, {
  horizontalLayout: 'full',
})

const infomation = options?.info

console.log(gradient.pastel.multiline(title))
console.log(
  boxen(chalk.cyan(infomation), {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'green',
  }),
)
