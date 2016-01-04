import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://ckd193-restapi-pessaai.c9users.io',
    namespace: ''
});
