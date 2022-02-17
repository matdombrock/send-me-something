const dirTree = require("directory-tree");
const path = require('path');
module.exports = (target, pathReplacement)=>{
  const normalPath = path.normalize(target).replaceAll('\\','/');
  // https://www.npmjs.com/package/directory-tree
  let tree = dirTree(normalPath, {normalizePath: true, attributes: ['size', 'ctime', 'atime', 'mtime', 'isDirectory', 'isFile']});
  if(pathReplacement){
    tree = JSON.stringify(tree);
    tree = tree.replaceAll(normalPath, pathReplacement);
    tree = JSON.parse(tree);
  }
  return tree;
}
