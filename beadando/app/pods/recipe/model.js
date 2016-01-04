import DS from 'ember-data';

const RecipeModel =  DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  base: DS.attr('string'),
  recipe: DS.attr('string')
});

RecipeModel.reopenClass({
    FIXTURES: [
                {
                    id: 1,
                    name: 'c9',
                    type: 'rossz',
                    base: 'rossz',
                    recipe: 'rossz',
                },
                {
                    id: 1,
                    name: 'c9',
                    type: 'rossz',
                    base: 'rossz',
                    recipe: 'rossz',
                }
        ]
    
})

export default RecipeModel;