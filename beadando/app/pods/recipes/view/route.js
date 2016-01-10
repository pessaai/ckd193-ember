import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            recipes: this.store.findRecord('recipe', params.recipe_id),
            comments: this.store.findQuery('comment', { filter: { author: params.recipe_id } })
        });
    },
});
