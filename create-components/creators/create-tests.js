const
  fs         = require('fs'),
  { config } = require('../config.js');


const createTests = ({ dirName, componentName, filename }) => new Promise((resolve, reject) => {
  const dirPath = `./${dirName}`;
  if (fs.existsSync(dirPath)) return reject(`Test component is exist`);
  console.log(`Start create componentTest:`, componentName);

  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) reject();
    else resolve({ dirPath, componentName, filename });
  });
})
  .then(async ({ dirPath, componentName, filename }) => {
    await fs.writeFile(`${dirPath}/${filename}.test.jsx`, config.template.component({ componentName, filename }),
      (err) => {
        if (err) throw(err);
      }
    );
    return ({ dirPath, filename })
  })
  .then(async ({ dirPath, filename }) => {
    await fs.writeFile(`${dirPath}/mocks.js`, config.template.mocks({ filename }),
      (err) => {
        if (err) throw(err);
      })
    console.log(`Finish create componentTest`);
  })
  .catch(err => console.log(`Err:`, err));

module.exports = {
  createTests
}
