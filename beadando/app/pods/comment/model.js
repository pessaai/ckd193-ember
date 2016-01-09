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
                    date: '2021.12.12',
                    text: 'rossz',
                    user: 'Anonymous',
                    recipe: '1',
                },
                {
                    id: 2,
                    date: '2021.12.24',
                    text: 'rossz',
                    user: 'Anonymous',
                    recipe: '1',
                }
        ]
    
});

export default CommentModel;