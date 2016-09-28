import DS from 'ember-data';

var serializer;
serializer = DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload.data, id, requestType);
  }
});

export default serializer;
