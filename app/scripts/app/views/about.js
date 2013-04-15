// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "handlebars", "text!./templates/about.hbs"], function($, _, Backbone, Handlebars, aboutTemplate) {
    'use strict';
    var AboutView, _ref;

    return AboutView = (function(_super) {
      __extends(AboutView, _super);

      function AboutView() {
        _ref = AboutView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AboutView.prototype.el = ".jumbotron";

      AboutView.prototype.template = Handlebars.compile(aboutTemplate);

      AboutView.prototype.initialize = function() {
        return this.render();
      };

      AboutView.prototype.render = function() {
        return $(this.el).html(this.template);
      };

      return AboutView;

    })(Backbone.View);
  });

}).call(this);
