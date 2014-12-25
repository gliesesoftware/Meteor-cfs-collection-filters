Package.describe({
  git: 'https://github.com/gliesesoftware/cfs-collection-filters.git',
  name: 'gliese:cfs-collection-filters',
  version: '0.2.4',
  summary: 'Gliese flavour of CollectionFS, adds FS.Collection filters (INTERNAL USE ONLY)'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['gliese:cfs-base@0.0.28', 'gliese:cfs-collection@0.5.4']);

  api.addFiles([
    'filters.js'
  ], 'client');

  api.addFiles([
    'filters.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest']);

//   api.addFiles('tests/server-tests.js', 'server');
//   api.addFiles('tests/client-tests.js', 'client');
// });
