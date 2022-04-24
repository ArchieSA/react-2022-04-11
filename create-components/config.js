const
  template = require('./templates/index.js'),
  { Type } = require('./types.js');


const config = {
  // type: Type.component,
  // path: `src/components/button`,
  // template: template.component,
  type: Type.componentTest,
  path: `src/features/review/ui/reviews/__tests__`,
  template: {
    component : template.componentTest,
    mocks     : template.mocksTest
  }
};

module.exports = {
  config
};

// node create-components/index.js
