(function () {
  'use strict';

  angular
    .module('courses')
    .directive('changecourseicon', changecourseicon);

  changecourseicon.$inject = [/*Example: '$state', '$window' */];

  function changecourseicon(/*Example: $state, $window */) {
    return {
      templateUrl: 'modules/courses/client/views/courseicon.client.view.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Change profile picture directive logic
        // ...

        //element.text('this is the changeProfilePicture directive');
      }
    };
  }
})();
