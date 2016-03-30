define('my-site/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'my-site/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _mySiteConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _mySiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mySiteConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _mySiteConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});