'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: '【01.特性】:     增加一个新特性'},
    {value: 'fix',      name: '【02.修复】:     修复了一个 Bug'},
    {value: 'docs',     name: '【03.文档】:     只修改了文档'},
    {value: 'style',    name: '【04.风格】:     优化代码风格，对逻辑不产生影响'},
    {value: 'refactor', name: '【05.重构】:     重构代码，对功能不产生影响'},
    {value: 'perf',     name: '【06.改良】:     提升代码运行效率'},
    {value: 'test',     name: '【07.测试】:     添加缺失的测试'},
    {value: 'chore',    name: '【08.苦差】:     改变编译流程或者辅助工具'},
    {value: 'revert',   name: '【09.还原】:     版本回退'},
    {value: 'WIP',      name: '【10.进行】:     工作进行中'}
  ],

  // scopes: [
  //   {name: 'accounts'},
  //   {name: 'admin'},
  //   {name: 'exampleScope'},
  //   {name: 'changeMe'}
  // ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择你当前 commit 的类型：',
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix']

};
