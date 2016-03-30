define('my-site/tests/helpers/resolver', ['exports', 'ember/resolver', 'my-site/config/environment'], function (exports, _emberResolver, _mySiteConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _mySiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mySiteConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});