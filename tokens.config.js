import path from 'path';

export default {
  source: ['tokens/demo-tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      prefix: 'ds',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    }
  }
};
