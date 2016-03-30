QUnit.module('JSHint - components');
QUnit.test('components/my-contact.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'components/my-contact.js should pass jshint.\ncomponents/my-contact.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncomponents/my-contact.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
