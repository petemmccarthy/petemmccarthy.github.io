define('my-site/router', ['exports', 'ember', 'my-site/config/environment'], function (exports, _ember, _mySiteConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _mySiteConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});