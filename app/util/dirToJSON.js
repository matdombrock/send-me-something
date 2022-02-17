const dirTree = require("directory-tree");
const path = require('path');
module.exports = (target, pathReplacement)=>{
  const normalPath = path.normalize(target);//.replaceAll('\\','/');
  let tree = dirTree(normalPath, {normalizePath: true});
  if(pathReplacement){
    tree = JSON.stringify(tree);
    tree = tree.replaceAll(normalPath, pathReplacement);
    tree = JSON.parse(tree);
  }
  return tree;
}
