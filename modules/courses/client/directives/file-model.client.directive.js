(function () {
  'use strict';

  angular
    .module('courses')
    .directive('fileModel', fileModel);

  fileModel.$inject = ['$parse'];

  function fileModel($parse) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // File model directive logic
        // ...
        var parsedFile = $parse(attrs.fileModel);
        var parsedFileSetter = parsedFile.assign;
        element.bind('chnage',function(){
          scope.$apply(function(){
            parsedFileSetter(scope,element[0].files[0]);
          });
        });
      }
    };
  }
})();
