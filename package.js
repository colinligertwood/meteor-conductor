Package.describe({
  name: 'colinligertwood:conductor',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Global event aggregation using Backbone.Events', 
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/colinligertwood/meteor-conductor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use('underscore');
  api.use('colinligertwood:backbone-events@1.2.3', 'client');
  api.addFiles('conductor.js', 'client');
  api.export('Conductor', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.addFiles('conductor-tests.js');
});

