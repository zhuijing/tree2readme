#!/usr/bin/env node
const program = require('commander');
// dirTree 自动生成项目的readme
program.command('start [pluginOptions]')
.description('自动生成项目的readme')
.option('--exclude <exclude>', '不需要在readme中列出的文件类型')
.action((paths, options) => {
  require('../index')(paths, options);
});

program.parse(process.argv);
