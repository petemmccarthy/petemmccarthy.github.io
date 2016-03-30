define('my-site/tests/components/my-about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/my-about.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/my-about.js should pass jshint.\ncomponents/my-about.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncomponents/my-about.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors');
  });
});