(function() {
  'use strict';

  angular
    .module('core')
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$scope','$http','toastr'];

  function ContactController($scope,$http,toastr) {
    var vm = this;
    $scope.disableValue = false;
    //$scope.contactData = {};

    // Contact controller logic
    // ...

    init();

    function init() {
    }

    $scope.contactEmail = function(isValid){
      $scope.disableValue = true;
      $http.post('/contact/emailsend',$scope.contactData).success(function(res){
        console.log('succes msg');
        console.log(res);
        $scope.contactData = {};
        $scope.disableValue = false;
        toastr.info('Your information has been sent. We will contact you soon', 'Contact you soon.');
      }).error(function(err){
        console.log('error msg');
        toastr.error('Your information is not send. Please try later after sometime', '');
      });
    };

  }
})();
