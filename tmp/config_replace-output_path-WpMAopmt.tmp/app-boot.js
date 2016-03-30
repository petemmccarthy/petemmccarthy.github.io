/* jshint ignore:start */

define('my-site/config/environment', ['ember'], function(Ember) {
  var prefix = 'my-site';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("my-site/app")["default"].create({"name":"my-site","version":"0.0.0+1a9afa92"});
}

/* jshint ignore:end */
