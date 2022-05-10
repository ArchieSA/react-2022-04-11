const { createComponentName } = require('../create-component-name/index.js');


/**
 * @param {string} path process.argv[2]
 * @returns {object} { dirname, componentName }
 */
function getNamesByArgv(path) {
  const
    cmds = path?.split(`/`)?.map(it => it.toLocaleLowerCase()),
    l    = cmds.length;

  let dirName = cmds[0];
  
  if (l > 1) {
    for (let i = 1; i < l; i++) {
      dirName += `/` + cmds[i];
    }
  }
  
  return {
    dirName,
    componentName: createComponentName(cmds[l - 1])
  }
}

module.exports = {
  getNamesByArgv
};


// const cmds = process.argv.slice(2).map(it => it.toLocaleLowerCase());

/**
 * Check cmds includes --dir and return dirname
 * @param {array<string>} cmds process.argv[2...]
 * @returns {string} dirname 
 */
// function getNames(cmds) {
//   console.log('cmds: ', cmds);
//   let dirName = cmds[0], componentName = cmds[0];
  
//   const dirCmdIdx = cmds.findIndex((it) => it === `--dir`);

//   if (dirCmdIdx !== -1) {
//     dirName = cmds[dirCmdIdx + 1];
//     // Check last char includes /
//     if (dirName[dirName.length - 1] !== `/`) dirName += `/`;
//     dirName += cmds[dirCmdIdx + 2];
//     componentName = createComponentName(cmds[dirCmdIdx + 2])
//   }

//   return { dirName, componentName }
// }
