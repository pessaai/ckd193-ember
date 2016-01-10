import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newComment(formData) {
            console.log(formData);
            let recipe = this.get('model.recipes');
            var comment = this.store.createRecord(
                'comment', 
                Object.assign(
                    {
                        user: 'Anonymous',
                        author : recipe
                    }, 
                    formData
                )
            );
            comment.save();
            this.transitionToRoute('recipes.view', this.get('model'));
        }
    }
});