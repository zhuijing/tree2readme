const dirTree = require('directory-tree');
const fs = require('fs');
const baseLine = [
  '└── ',
  '|   ',
  '├── '
];
const readmeStart = [
  '## 项目结构',
  '\n',
  '```'
];
const readmeEnd = [
  '\n',
  '```'
];
function addStart () {
  readmeStart.forEach(item => {
    fs.writeFileSync('readme.md', `${item}`, { flag: 'a+' });
  });
}
function addEnd () {
  readmeEnd.forEach(item => {
    fs.writeFileSync('readme.md', `${item}`, { flag: 'a+' });
  });
}
function dfs (trees, opefn) {
  const walk = (tree, depth = 1, isEnd) => {
    opefn(tree, depth, isEnd);
    if (tree.children) {
      tree.children.forEach((node, index) => {
        walk(node, depth + 1, index === tree.children.length - 1);
      });
    }
  };
  trees.forEach((item,index) => {
    walk(item,1,index === trees.length -1);
  });
}
function ope (node, depth, isEnd) {
  let pre = '';
  for (let i = 0; i < depth; i++) {
    if (i < depth - 1) {
      pre += baseLine[1];
    } else {
      pre += isEnd ? baseLine[0] : baseLine[2];
    }
  }
  fs.writeFileSync('readme.md', `${pre + node.name}\n`, { flag: 'a+' });
}
module.exports = function (pathArg, args) {
  const dirPath = pathArg || process.cwd();
  const exclude = args.exclude ? new RegExp(args.exclude) : /\.(png|jpg|jpeg|svga)$/;
  const filteredTree = dirTree(dirPath, {
    exclude
  });
  addStart();
  fs.writeFileSync('readme.md', `\n${filteredTree.name}\n`, { flag: 'a+' });
  if (filteredTree.children) {
    const sortChildren = filteredTree.children.sort((a,b )=>{
      if(b.name ==='index.html'){
        return -1
      } else {
        return 1
      }
    })
    console.log('sortChildren', sortChildren)
    dfs(sortChildren, ope);
  }
  addEnd();
};
