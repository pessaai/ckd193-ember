import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyRecipe(formData){
            let recipe = this.get('model');
            recipe.setProperties(formData);
            
            recipe.save();
            this.transitionToRoute('recipes.list');
        }
    }
});
