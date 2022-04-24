const component = (componentName) => (`import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';
import s from './index.module.scss';


const ${componentName} = ({ className, children }) => {

  return (
    <div className={cn(s.root, className)}>
      {
        children
      }
    </div>
  )
};

${componentName}.defaultProps = {
};

${componentName}.propTypes = {
  className : pt.string,
  children  : pt.node
};

export default ${componentName};
`);

module.exports = { component };
