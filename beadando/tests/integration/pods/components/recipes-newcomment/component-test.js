import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recipes-newcomment', 'Integration | Component | recipes newcomment', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{recipes-newcomment}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#recipes-newcomment}}
      template block text
    {{/recipes-newcomment}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
