import DS from 'ember-data';

const CommentModel =  DS.Model.extend({
  text: DS.attr('string'),
  user: DS.attr('string'),
  author: DS.belongsTo('recipe')
});

CommentModel.reopenClass({
    FIXTURES: [
                {
                    id: 1,
                    text: 'rossz',
                    user: 'Anonymous',
                    recipe: '1',
                },
                {
                    id: 2,
                    text: 'rossz',
                    user: 'Anonymous',
                    recipe: '1',
                }
        ]
    
});

export default CommentModel;