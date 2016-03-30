define('my-site/tests/integration/components/my-contact-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/my-contact-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/my-contact-test.js should pass jshint.');
  });
});