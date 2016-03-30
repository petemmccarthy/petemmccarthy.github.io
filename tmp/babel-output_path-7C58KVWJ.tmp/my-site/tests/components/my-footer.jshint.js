define('my-site/tests/components/my-footer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/my-footer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/my-footer.js should pass jshint.\ncomponents/my-footer.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncomponents/my-footer.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors');
  });
});