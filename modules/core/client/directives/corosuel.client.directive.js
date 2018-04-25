(function () {
  'use strict';

  angular
    .module('core')
    .directive('corosuel', corosuel);

  corosuel.$inject = [/*Example: '$state', '$window' */];

  function corosuel(/*Example: $state, $window */) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Corosuel directive logic
        // ...

        element.text('this is the corosuel directive');
      }
    };
  }
})();
