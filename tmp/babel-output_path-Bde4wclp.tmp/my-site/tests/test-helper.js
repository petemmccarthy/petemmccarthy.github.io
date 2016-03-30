define('my-site/tests/test-helper', ['exports', 'my-site/tests/helpers/resolver', 'ember-qunit'], function (exports, _mySiteTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_mySiteTestsHelpersResolver['default']);
});