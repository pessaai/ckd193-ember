import Ember from 'ember';

export default Ember.Component.extend({
    comments: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                text: this.$('#text').val()
            });
        }
    },
    
    validate() {
        var text = this.$('#text').val();
        
        this.set('comments.text', text === '' ? 'Komment írása kötelező' : '');
        
        return this.get('comments.text') === '';
    }
});
