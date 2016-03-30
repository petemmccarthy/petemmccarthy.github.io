define('my-site/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'my-site/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _mySiteConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_mySiteConfigEnvironment['default'].APP.name, _mySiteConfigEnvironment['default'].APP.version)
  };
});