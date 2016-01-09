import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newComment(formData) {
            console.log(formData);
            let recipe = this.get('model');
            var comment = this.store.createRecord(
                'comment', 
                Object.assign(
                    {
                        //date: Date.now().toLocaleString(),
                        user: 'Anonymous',
                        author : recipe
                    }, 
                    formData
                )
            );
            comment.save();
            this.transitionToRoute('recipes.view');
        }
    }
});