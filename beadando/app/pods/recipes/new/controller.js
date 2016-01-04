import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newRecipe(formData) {
            console.log(formData);
            // formData.status = 'new';
            // formData.date = Date.now().toLocaleString();
            var recipe = this.store.createRecord(
                'recipe', 
                Object.assign(
                    {
                        name: 'new',
                        //date: Date.now().toLocaleString(),
                        base: 'labor',
                        type: 'rossz',
                        recipe: 'blabla'
                    }, 
                    formData
                )
            );
            recipe.save();
            this.transitionToRoute('recipes.list');
        }
    }
});