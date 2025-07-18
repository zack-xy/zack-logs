#!/usr/bin/env node

/* eslint-disable no-console */

import process from 'node:process'
import boxen from 'boxen'
import chalk from 'chalk'
import figlet from 'figlet'
import gradient from 'gradient-string'

// 获取命令行参数

const args = process.argv.slice(2)
const nameIndex = args.indexOf('--name')
const name = nameIndex !== -1 && args[nameIndex + 1] ? args[nameIndex + 1] : 'zack-xy'

const title = figlet.textSync(name, {
  horizontalLayout: 'full',
})

console.log(gradient.pastel.multiline(title))
console.log(
  boxen(chalk.cyan(' 🎉 Hi！I\'m Zack Zheng(<zack_zhengxiyun@163.com>) 🎉 '), {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'green',
  }),
)
