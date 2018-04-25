'use strict';

angular.module('users').controller('ChangeProfilePictureController', ['$scope', '$state', 'NotificationService', '$timeout', '$window', 'Authentication', 'FileUploader','$rootScope','localStorageService',
  function ($scope, $state, NotificationService, $timeout, $window, Authentication, FileUploader,$rootScope,localStorageService) {
    /*$scope.user = Authentication.user;*/
    //$scope.imageURL = $scope.user.profileImageURL;
    $scope.pco = JSON.parse(localStorageService.get('User'));

    $scope.onLoad = function (e, reader, file, fileList, fileOjects, fileObj) {
      $rootScope.imageURL = fileObj.base64;
    };
    
    //console.log($scope.user);

    // Create file uploader instance
    $scope.uploader = new FileUploader({
      url: 'api/users/picture',
      alias: 'newProfilePicture',
      headers:{ 'uid':$scope.pco.PHOB_PCOID }


    });

    $scope.uploader.filters.push({
      name: 'customFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
        return this.queue.length <=1;
      }
    });
    $scope.uploader.filters.push({
      name: 'imageFilter',
      fn: function (item, options) {
        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    });

    // Called after the user selected a new picture file
    $scope.uploader.onAfterAddingFile = function (fileItem) {
      var filesize;
      filesize=fileItem.file.size/(1024*1024);
      if(filesize>5) {
        NotificationService.error('image size should be less than 5 MB');
        $scope.uploader.clearQueue();
      }

      if($scope.uploader.queue.length>1) {
        $scope.uploader.queue[0]=$scope.uploader.queue[1];
      }
      $scope.success = $scope.error = null;

      $scope.uploader.queue[0].upload();
    };

    // Called after the user has successfully uploaded a new picture
    $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
      // Show success message
      $scope.success = true;
      $rootScope.imageURL=response;

      /*// Populate user object
      $scope.user = Authentication.user = response;

      $rootScope.imageURL=$scope.user.profileImageURL;
      console.log($rootScope.imageURL);*/

      // Clear upload buttons
      $scope.cancelUpload();
    };

    // Called after the user has failed to uploaded a new picture
    $scope.uploader.onErrorItem = function (fileItem, response, status, headers) {
      // Clear upload buttons
      $scope.cancelUpload();

      // Show error message
      $scope.error = response.message;
    };

    // Change user profile picture
    $scope.uploadProfilePicture = function () {
      // Clear messages
      $scope.success = $scope.error = null;

      // Start upload
      $scope.uploader.uploadAll();
    };

    // Cancel the upload process
    $scope.cancelUpload = function () {
      $scope.uploader.clearQueue();
      $scope.imageURL = $rootScope.imageURL;
    };
  }
]);
