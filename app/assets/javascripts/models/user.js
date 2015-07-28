/* eslint camelcase: 0, new-cap: 0 */
import { Validator, Assert} from 'validator.js';
import Backbone from 'backbone';


module.exports = Backbone.Model.extend({

  constraints: {
    email:      [ new Assert().Required(), new Assert().Email() ],
    first_name: new Assert().Required(),
    last_name:  new Assert().Required()
  },

  validate(attrs) {
    var result = new Validator().validate(attrs, this.constraints);

    if (result === true) {
      return void(0);
    }

    return result;
  }

});
