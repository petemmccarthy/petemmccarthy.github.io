QUnit.module('JSHint - components');
QUnit.test('components/my-work.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'components/my-work.js should pass jshint.\ncomponents/my-work.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncomponents/my-work.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
