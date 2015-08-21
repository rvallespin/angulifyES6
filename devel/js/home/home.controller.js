//import HomeController from './home';

var moduleName='Home';

angular.module(moduleName, [])
    .controller('homeCtrl', function() {
        this.hello = "foo";
    });

export default moduleName;
