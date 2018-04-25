(function () {
  'use strict';

  angular
    .module('courses')
    .controller('CoursesListController', CoursesListController);

  CoursesListController.$inject = ['CoursesService','Authentication','$scope','$state'];

  function CoursesListController(CoursesService,Authentication,$scope,$state) {
    var vm = this;
    $scope.authentication = Authentication;

    vm.courses = CoursesService.query();
    console.log(vm.courses);
    $scope.deleteCourse = function(deleteItem,index) {
      if (confirm('Are you sure you want to delete?')) {
        vm.courses.splice(index,1);
        deleteItem.$remove($state.go('courses.list'));
      }
    };
  }
}());
