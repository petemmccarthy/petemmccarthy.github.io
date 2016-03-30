define('my-site/tests/integration/components/my-about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/my-about-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/my-about-test.js should pass jshint.');
  });
});