/* jshint camelcase: false */
var ValidatorJs = require('validator.js');
var Validator   = ValidatorJs.Validator;
var Assert      = ValidatorJs.Assert;
var Backbone    = window.Backbone;


var User = Backbone.Model.extend({

  constraints: {
    email:      [ new Assert().Required(), new Assert().Email() ],
    first_name: new Assert().Required(),
    last_name:  new Assert().Required()
  },

  validate: function(attrs) {
    var result = new Validator().validate(attrs, this.constraints);

    if (result === true) {
      return;
    }

    return result;
  }

});



module.exports = User;
