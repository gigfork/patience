// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "handlebars", "text!./templates/contact.hbs"], function($, _, Backbone, Handlebars, contactTemplate) {
    'use strict';
    var ContactView, _ref;

    return ContactView = (function(_super) {
      __extends(ContactView, _super);

      function ContactView() {
        _ref = ContactView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ContactView.prototype.el = ".jumbotron";

      ContactView.prototype.template = Handlebars.compile(contactTemplate);

      ContactView.prototype.initialize = function() {
        return this.render();
      };

      ContactView.prototype.render = function() {
        return $(this.el).html(this.template);
      };

      return ContactView;

    })(Backbone.View);
  });

}).call(this);
