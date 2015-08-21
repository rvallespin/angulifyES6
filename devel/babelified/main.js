"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _node_modulesAngular = require('../../node_modules/angular');

var _node_modulesAngular2 = _interopRequireDefault(_node_modulesAngular);

var _node_modulesAngularRoute = require('../../node_modules/angular-route');

var _node_modulesAngularRoute2 = _interopRequireDefault(_node_modulesAngularRoute);

var _homeHomeController = require('./home/home.controller');

var _homeHomeController2 = _interopRequireDefault(_homeHomeController);

var moduleName = 'rester';

function config($routeProvider) {
    $routeProvider.when('/', {
        template: require('../html/hello.html'),
        controller: 'homeCtrl',
        controllerAs: 'vm'
    }).otherwise({ redirectTo: '/' });
}

config.$inject = ['$routeProvider'];

_node_modulesAngular2['default'].module(moduleName, ['ngRoute', _homeHomeController2['default']]).config(config);

exports['default'] = moduleName;
module.exports = exports['default'];