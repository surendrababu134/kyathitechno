(function() {
  'use strict';

  angular
    .module('core')
    .controller('AboutControllerController', AboutControllerController);

  AboutControllerController.$inject = ['$scope'];

  function AboutControllerController($scope) {
    var vm = this;

    // About controller controller logic
    // ...

    init();

    function init() {
    }
  }
})();
