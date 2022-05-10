/**
 * @param {string} value  with text divider '-' not '_'. Example card-component-item
 * @returns {string} ComponentName => CardComponentItem
 */
function createComponentName(value) {
  return value
    .split(`-`)
    .map(it => it[0].toLocaleUpperCase() + it.slice(1))
    .join(``);
}

module.exports = {
  createComponentName
};
