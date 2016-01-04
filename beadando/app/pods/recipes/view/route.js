import Ember from 'ember';

export default Ember.Route.extend({
    model_comment() {
        return this.store.findAll('comment');
    },
    model(params) {
        return this.store.findRecord('recipe', params.recipe_id);
    }
});
