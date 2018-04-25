(function() {
  'use strict';

  angular
    .module('core')
    .controller('ServicescController', ServicescController);

  ServicescController.$inject = ['$scope'];

  function ServicescController($scope) {
    var vm = this;

    // Servicesc controller logic
    // ...

    init();

    function init() {
    }
  }
})();
