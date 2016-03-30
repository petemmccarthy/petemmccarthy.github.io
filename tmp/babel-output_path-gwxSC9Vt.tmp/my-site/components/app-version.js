define('my-site/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'my-site/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _mySiteConfigEnvironment) {

  var name = _mySiteConfigEnvironment['default'].APP.name;
  var version = _mySiteConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});