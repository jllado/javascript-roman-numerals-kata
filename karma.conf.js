module.exports = function (config) {
  'use strict';

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],
    exclude: [],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false,

    preprocessors: {
      'src/**/*.js': ['babel'],
      'test/**/*.js': ['babel'],
    },

    'babelPreprocessor': {
      options: {
        sourceMap: 'inline'
      },
      filename: function(file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function(file) {
        return file.originalPath;
      }
    }
  });
};
