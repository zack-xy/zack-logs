#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import boxen from 'boxen';

const title = figlet.textSync('zack-xy', {
  horizontalLayout: 'full',
});

console.log(gradient.pastel.multiline(title));
console.log(
  boxen(chalk.cyan('Welcome to Zack Logs! 🎉'), {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'green',
  })
);
