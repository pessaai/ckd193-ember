import Ember from 'ember';

export default Ember.Component.extend({
    recipes: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                name: this.$('#name').val(),
                type: this.$('#type').val(),
                base: this.$('#base').val(),
                recipe: this.$('#recipe').val(),
            });
        }
    },
    
    validate() {
        var name = this.$('#name').val();
        var type = this.$('#type').val();
        var base = this.$('#base').val();
        var recipe = this.$('#recipe').val();
        
        this.set('recipes.name', name === '' ? 'Név kötelező' : '');
        this.set('recipes.type', type === '' ? 'Típus kötelező' : '');
        this.set('recipes.base', base === '' ? 'Alap kötelező' : '');
        this.set('recipes.recipe', recipe === '' ? 'Recept kötelező' : '');
        
        return this.get('recipes.name') === '' &&
               this.get('recipes.type') === '' &&
               this.get('recipes.base') === '' &&
               this.get('recipes.recipe') === '';
    }
});
