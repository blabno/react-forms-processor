/**
 * Creates npm branch and tag with the same content as package that would be published to npm.
 */
const ghpages = require('gh-pages');
const packageJson = require('./package');

function callback(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.info('Branch published successfully');
}

const config = {
  branch: 'npm',
  tag: packageJson.version,
  message: `Release ${packageJson.version}`,
  src: ['dist/**/*', 'package.json', '.npmignore']
};

ghpages.publish('.', config, callback);
