define('my-site/router', ['exports', 'ember', 'my-site/config/environment'], function (exports, _ember, _mySiteConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _mySiteConfigEnvironment['default'].locationType
  });

  exports['default'] = Router.map(function () {
    this.resource('my-site', { path: '/' });
    this.route('my-menu', { path: '/my-menu' }, function () {
      this.route('my-about', function () {
        this.route('my-work');
        this.route('my-contact');
        this.route('my-cv');
      });
    });
  });
});