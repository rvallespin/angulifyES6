'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _babelifiedMainJs = require('../babelified/main.js');

var _babelifiedMainJs2 = _interopRequireDefault(_babelifiedMainJs);

angular.bootstrap(document, [_babelifiedMainJs2['default']]);