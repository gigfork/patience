// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "handlebars", "text!../templates/home.hbs"], function($, _, Backbone, Handlebars, homeTemplate) {
    'use strict';
    var HomeView, _ref;

    return HomeView = (function(_super) {
      __extends(HomeView, _super);

      function HomeView() {
        _ref = HomeView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      HomeView.prototype.el = ".content";

      HomeView.prototype.template = Handlebars.compile(homeTemplate);

      HomeView.prototype.initialize = function() {
        return this.render();
      };

      HomeView.prototype.render = function() {
        $(this.el).html(this.template);
        $(".jumbotron").slideDown();
        return $(".jumbotron").removeClass("hidden");
      };

      return HomeView;

    })(Backbone.View);
  });

}).call(this);
