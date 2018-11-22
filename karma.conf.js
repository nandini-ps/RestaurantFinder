// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', '@angular/cli'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-spec-reporter'),
      require('@angular/cli/plugins/karma')
    ],

    client:{
      clearContext: false,// leave Jasmine Spec Runner output visible in browser
      captureConsole:true//added by me
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },

    reporters: ['spec','progress', 'kjhtml'],//'log-reporter'
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    


    specReporter: {
        maxLogLines: 1,             // limit number of lines logged per test 
        suppressErrorSummary: false, // do not print error summary // this gives 1),2) for failed tests at the end, we need this to be false
        suppressFailed: false,      // do not print information about failed tests 
        suppressPassed: false,      // do not print information about passed tests // this will be true only for trainee code.
        suppressSkipped: false,      // do not print information about skipped tests 
        showSpecTiming: true,      // print the time elapsed for each spec 
        failFast: false              // test would finish with error when a first fail occurs.  
      },
    
  });
};
