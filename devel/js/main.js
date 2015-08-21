"use strict";

import angular from '../../node_modules/angular';
import ngRoute from '../../node_modules/angular-route';

import Home from './home/home.controller';

var moduleName = 'rester';

function config($routeProvider){
    $routeProvider
        .when('/',{
            template: require('../html/hello.html'),
            controller: 'homeCtrl',
            controllerAs:'vm'
        })
        .otherwise({redirectTo:'/'});
}

config.$inject = ['$routeProvider'];

angular.module(moduleName, ['ngRoute', Home]).config(config);

export default moduleName;