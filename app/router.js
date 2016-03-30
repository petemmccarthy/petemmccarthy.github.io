import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function () {
  this.resource('my-site', { path: '/' });
  this.route('my-menu', { path: '/my-menu'}, function () {
    this.route('my-about', function () {
    this.route('my-work');
    this.route('my-contact');
    this.route('my-cv');
    });
  });
});
