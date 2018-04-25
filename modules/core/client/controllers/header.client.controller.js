'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus','$http','$rootScope',
  function ($scope, $state, Authentication, Menus,$http,$rootScope) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
    $scope.removeRootscopeVar=function () {
      for (var prop in $rootScope) {
        if (typeof $rootScope[prop]!== 'function' && prop.indexOf('$') === -1 && prop.indexOf('$$') === -1) {
          delete $rootScope[prop];
        }
      }
    };

    $scope.signout = function(){
      console.log('hello');
      $http.get('/api/auth/signout').then(function success(req){
        $scope.removeRootscopeVar();
        if(req.data.msgVal==='success'){
          $scope.authentication.user=null;
          $state.go('home');
        }
      }).then(function error(err){

      });
    };
  }
]);
