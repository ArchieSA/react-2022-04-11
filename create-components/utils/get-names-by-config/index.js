const
  { createComponentName } = require('../create-component-name/index.js'),
  { config } = require('../../config.js'),
  { Type } = require('../../types.js');


/**
 * @returns {object} { dirname, componentName }
 */
function getNamesByConfig(type) {
  const
    cmds = config.path?.split(`/`)?.map(it => it.toLocaleLowerCase()),
    l    = cmds.length,
    test = type === Type.componentTest;

  let dirName = cmds[0];
  
  if (l > 1) {
    for (let i = 1; i < l; i++) {
      dirName += `/` + cmds[i];
    }
  }
  
  return {
    dirName,
    componentName : createComponentName(cmds[l - test ? 2 : 1]), // if test get before last item
    filename      : cmds[l - 2] // for test
  }
}

module.exports = {
  getNamesByConfig
};
